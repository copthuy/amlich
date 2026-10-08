"use strict";

import { d, close_icon } from './system.js';
import { main, calendar } from './dom.js';
import { EVENTS } from './amlich.js';
import { currentUser } from './auth.js';
import { saveEvents } from './cloud.js';

export const $events = [];

/* User event data, kept in memory only. */
let userEvents = [];
let savedSnapshot = '[]';
let saveTimer = null;

export const getUserEvents = () => userEvents;

export const setUserEvents = events => {
	userEvents = Array.isArray(events) ? events : [];
	savedSnapshot = JSON.stringify(userEvents);
};

export const updateEvents = () => {
	const newEvents = [...EVENTS].concat(userEvents.map(el => {
		const date = el.date.split(/\D/).map(Number);
		return [0, date[0], date[1], el.description];
	}));
	$events.splice(0, $events.length, ...newEvents);

	main();
	calendar();
};

const scheduleSave = () => {
	const user = currentUser();
	if (!user) {
		return;
	}
	if (JSON.stringify(userEvents) === savedSnapshot) {
		return;
	}
	clearTimeout(saveTimer);
	saveTimer = setTimeout(async () => {
		const snapshot = JSON.stringify(userEvents);
		try {
			await saveEvents(user.uid, userEvents);
			savedSnapshot = snapshot;
		} catch (err) {
			console.error('Không lưu được sự kiện', err);
		}
	}, 800);
};

export const saveData = () => {
	const evtList = d.querySelector('.user-events');
	if (!evtList) {
		return;
	}
	const data = [];
	evtList.querySelectorAll('tr').forEach(row => {
		if (row.id != '0' && row.innerText.trim() != '') {
			const row_content = [...row.querySelectorAll('td')].map(td => td.textContent.trim());
			data.push({
				date: row_content[0],
				description: row_content[1]
			});
		}
	});
	userEvents = data;
	updateEvents();
	scheduleSave();
};

export const addOnChange = el => ['change', 'input'].forEach(event =>
	el.addEventListener(event, evt => {
		const list = d.querySelector('.user-events table');
		const last_row = list.querySelector('tr:last-child');
		if (last_row.innerText.trim() != '') {
			const evt = d.createElement('tr');
			evt.id = new Date().getTime().toString(36);
			evt.innerHTML = `
				<td contenteditable></td>
				<td contenteditable></td>
				<td class="remove-event"><button type="button">${ close_icon }</button></td>
			`;
			list.appendChild(evt);
			evt.querySelectorAll('[contenteditable]').forEach(addOnChange);
			evt.querySelectorAll('button').forEach(addOnClick);
		}
		saveData();
	})
);

export const addOnClick = el => el.addEventListener('click', evt => {
	const row = evt.target.closest ? evt.target.closest('tr') : null;
	if (row && row.parentNode) {
		row.parentNode.removeChild(row);
	}
	saveData();
});

export const updateEventList = events => {
	const list = d.querySelector('.user-events');
	if (list) {
		const editable = !!currentUser();
		list.innerHTML = '<div><table></table></div>';
		[
			{
				date: 'Ngày âm',
				description: 'Sự kiện'
			},
			...events,
			{
				date: '',
				description: ''
			}
		].forEach((el, index) => {
			const canEdit = index && editable;
			const attr = canEdit ? ' contenteditable' : '';
			const tag = index ? 'td' : 'th';
			const cls = canEdit
				? `<td class="remove-event"><button type="button">${ close_icon }</button></td>`
				: '<td></td>';
			const evt = d.createElement('tr');
			evt.id = index ? new Date().getTime().toString(36) : 0;
			evt.innerHTML = `
				<${ tag + attr }>${ el.date }</${ tag }>
				<${ tag + attr }>${ el.description }</${ tag }>
				${ cls }
			`;
			list.firstChild.firstChild.appendChild(evt);
		});
		if (editable) {
			list.querySelectorAll('[contenteditable]').forEach(addOnChange);
			list.querySelectorAll('button').forEach(addOnClick);
		}
	}
};

