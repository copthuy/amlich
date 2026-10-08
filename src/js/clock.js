"use strict";

import { d } from './system.js';

export const clock = () => {
	setInterval(() => {
		const interval = new Date();
		const place = d.querySelector('.clock');
		const hour = interval.getHours();
		const minute = interval.getMinutes();
		const colon = `<span class="${ interval.getSeconds() % 2 ? 'colon-hide' : '' }">:</span>`;
		const giac = `
			<div class="giac">(${
				hour >= 4 && hour < 11 ? 'sáng' :
				hour >= 11 && hour < 13 ? 'trưa' :
				hour >= 13 && hour < 18 ? 'chiều' :
				hour >= 18 && hour <= 23 ? 'tối' : 'khuya'
			})
			</div>
		`;

		if (place) {
			place.innerHTML = 
				String(hour % 12).padStart(2, '0') + 
				colon + 
				String(minute).padStart(2, '0') +
				giac;
		}
	}, 10);
};
