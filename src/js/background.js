"use strict";

import bg01 from '../images/bg-01.webp';
import bg02 from '../images/bg-02.webp';
import bg03 from '../images/bg-03.webp';
import bg04 from '../images/bg-04.webp';
import bg05 from '../images/bg-05.webp';

const backgrounds = [bg01, bg02, bg03, bg04, bg05];
const INTERVAL = 1 * 60 * 1000; // 1 minute

export const background = () => {
	let index = Math.round(Math.random() * 4 + 1);

	const apply = () => {
		document.body.style.setProperty('--bg-image', `url("${ backgrounds[index] }")`);
	};

	apply();

	setInterval(() => {
		index = (index + 1) % backgrounds.length;
		apply();
	}, INTERVAL);
};
