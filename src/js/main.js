"use strict";

import 'swiped-events';
import '../css/site.css';

import { leaf, update, renderAccount } from './dom.js';
import { updateEvents, setUserEvents, getUserEvents, updateEventList } from './data.js';
import { clock } from './clock.js';
import { background } from './background.js';
import { onAuth, signIn, currentUser } from './auth.js';
import { loadEvents } from './cloud.js';

const wireAccount = () => {
	const signin = document.querySelector('.signin-btn');

	if (signin) {
		signin.addEventListener('click', () => {
			if (currentUser()) {
				return;
			}
			signIn().catch(err => console.error('Đăng nhập thất bại', err));
		});
	}
};

const refreshEvents = () => {
	updateEvents();
	if (document.querySelector('.user-events')) {
		updateEventList(getUserEvents());
	}
};

const init = () => {
	const app = document.createElement('div');
	app.id = 'app';
	document.body.appendChild(app);

	background();
	leaf();
	updateEvents();
	clock();
	update();

	wireAccount();

	let currentUid = null;

	onAuth(async user => {
		renderAccount(user);

		const uid = user ? user.uid : null;
		/* Skip repeated onAuth events (e.g. Firebase token refresh). */
		if (uid === currentUid) {
			return;
		}
		currentUid = uid;

		if (user) {
			let events = [];
			try {
				events = await loadEvents(user.uid);
			} catch (err) {
				console.error('Không tải được sự kiện', err);
			}

			setUserEvents(events);
		} else {
			setUserEvents([]);
		}

		refreshEvents();
	});
};

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}
