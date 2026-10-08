"use strict";

import { d, $today as todayVar, bookmark_icon, calendar_icon, undo_icon, user_icon } from './system.js';
import { SO, NAM, dateToLunar, convertSolar2Lunar, getCanChi, getHourCanChi, getTietKhi, getGioHoangDao, isToday, isSameDay } from './amlich.js';
import { createMoon } from './moon.js';
import { updateEventList, getUserEvents, $events } from './data.js';

let $today = todayVar;

export const main = (date = new Date()) => {
	const main_page = d.querySelector('.main');
	if (!main_page) {
		return;
	}
	
	$today = date;
	let ngayam = dateToLunar(date);
	let tongngay = ngayam[1] == convertSolar2Lunar(date.getDate() - ngayam[0] + 30, date.getMonth() + 1, date.getFullYear())[1] ? 30 : 29;
	let canchi = getCanChi(...ngayam);
	const ngaytinh = ngayam[0] == 30 || ngayam[0] == 1 || ngayam[0] == 29 ? 0 : ngayam[0];
	let moon = createMoon(100, 1 - Math.abs(ngaytinh - 15) / 15, ngaytinh <= 15, 5);
	
	main_page.innerHTML = `
		<h2 class="year">${ date.getFullYear() }</h2>
		<h3 class="month">Tháng ${ SO[date.getMonth()] }</h3>
		<h1 class="day">${ date.getDate() }</h1>
		<h4 class="dow">${ date.getDay() != 0 ? 'Thứ ' + SO[date.getDay()] : 'Chủ Nhật' }</h4>
		${
			$events.
				filter(el => 
					(!el[0] && el[1] == ngayam[0] && el[2] == ngayam[1]) ||
					(!!el[0] && el[1] == date.getDate() && el[2] == date.getMonth() + 1)
				).
				map(el => `<div class="event">${ el[3] }</div>`).
				join``
		}
		<div class="bottom">
			<div class="nam">
				<h5>Năm ${ canchi[2] }</h5>
				<ul>
					<li>Tháng ${ canchi[1] }</li>
					<li>Ngày ${ canchi[0] }</li>
					<li>Giờ ${ getHourCanChi(ngayam[4]) }</li>
					<li>Tiết ${ getTietKhi(ngayam[4]) }</li>
				</ul>
				<div class="clock"></div>
			</div>
			<h4 class="ngay ngay-${ (ngayam[4] + 1) % 12 }">
				${ ngayam[0] }
				${ moon }
			</h4>
			<div class="thang">
				<h5>Tháng ${ NAM[ngayam[1] - 1] } <small><em>(${ tongngay == 30 ? 'Đủ' : 'Thiếu' })</em></small></h5>
				<ul>
					<li><strong>Giờ hoàng đạo:</strong><br>${ getGioHoangDao(ngayam[4]) }</li>
				</ul>
			</div>
		</div>
	`;

	const leaf_page = main_page.parentNode;
	leaf_page.classList.remove('sat', 'sun');
	if (date.getDay() == 0) {
		leaf_page.classList.add('sun');
	}
	if (date.getDay() == 6) {
		leaf_page.classList.add('sat');
	}
}

export const calendar = (date = new Date()) => {
	const calendar_page = d.querySelector('.calendar');
	if (!calendar_page) {
		return;
	}
	
	calendar_page.innerHTML = `
		<table>
			<tr class="day-header">
			${
				[...new Array(7)].map((_, i) => `<th class="cell">${ i ? 'T' + -~i : 'CN' }</th>`).join``
			}
			</tr>
			${
				(_ => {
					const month = date.getMonth();
					let cellDate, cellDay, i = 1, html = '', ngayam, event, today, selectedday;
					for (; (cellDate = new Date(date.getFullYear(), month, i)).getMonth() == month; i++) {
						ngayam = dateToLunar(cellDate);
						cellDay = cellDate.getDay();
						event = $events.filter(el => 
								(el[0] == 0 && el[1] == ngayam[0] && el[2] == ngayam[1]) ||
								(el[0] == 1 && el[1] == cellDate.getDate() && el[2] == cellDate.getMonth() + 1)
							).length ? ' event' : '';
						today = isToday(cellDate) ? ' today' : '';
						selectedday = isSameDay(cellDate, $today) ? ' selected' : '';

						if (cellDay == 0) {
							html += `<tr>`;
						}
						for (let j = 0; i == 1 && j < cellDay; j++) {
							html += `<td class="cell"></td>`;
						}
						html += `<td class="cell${ selectedday + today + event }" data-date="${ cellDate.getFullYear() }/${ cellDate.getMonth() + 1 }/${ cellDate.getDate() }">${ i }<i>${ ngayam[0] + (ngayam[0] != 1 ? '' : '/' + ngayam[1]) }</i></td>`;
						if (cellDay == 6) {
							html += `</tr>`;
						}
					}
					if (cellDay < 6) {
						for (let j = 0; j < 6 - cellDay; j++) {
							html += `<td class="cell"></td>`;
						}
						html += `</tr>`;
					}
					return html;
				})()
			}
		</table>
	`;
	calendar_page.querySelectorAll('[data-date]').forEach(el => {
		el.addEventListener('click', evt => {
			const previousSelected = d.querySelector('.selected');
			if (previousSelected) {
				previousSelected.classList.remove('selected');
			}
			evt.target.classList.add('selected');
			main(new Date(evt.target.getAttribute('data-date')));
			
			const leaf_page = d.querySelector('.leaf');
			leaf_page.classList.remove('panel-show');
			leaf_page.classList.remove('user-event-show');
		});
	});
};

export const update = (date = new Date()) => {
	main(date);
	calendar(date);
	const year = d.querySelector('[name="year"]');
	const month = d.querySelector('[name="month"]');
	if (month) month.selectedIndex = date.getMonth();
	if (year) year.value = date.getFullYear();
};

export const resetDate = () => {
	$today = new Date();
	update($today);
	
	const leaf_page = d.querySelector('.leaf');
	if (leaf_page) {
		leaf_page.classList.remove('panel-show');
		leaf_page.classList.remove('user-event-show');
	}
};

export const leaf = (date = new Date()) => {
    /* mount point created by JS in main.js */
	const app = d.getElementById('app');
	if (app) {
		app.textContent = '';
	}

	const leaf_page = d.createElement('div');
	leaf_page.className = 'leaf';
	leaf_page.innerHTML = `
		<div class="main">
		</div>
		<div class="panel">
			<div class="selector">
				<select name="month">
				${
					[...new Array(12)].map((_, i) => `<option value="${ i + 1 }"${ i == date.getMonth() ? ' selected' :'' }>${ i + 1 }</option>`).join('')
				}
				</select>
				<input type="number" name="year" value="${ date.getFullYear() }">
			</div>
			<div class="calendar"></div>
			<div class="user">
				<div class="user-events"></div>
			</div>
		</div>
		<div class="nav">
			<button type="button" class="toggle-calendar">${ calendar_icon }</button>
			<button type="button" class="data-btn">${ bookmark_icon }</button>
			<button type="button" class="signin-btn">${ user_icon }</button>
			<button type="button" class="reset-btn">${ undo_icon }</button>
		</div>
	`;
	(app || d.body).appendChild(leaf_page);

	d.querySelectorAll('.selector input, .selector select').forEach(el => {
		el.addEventListener('change', evt => {
			const year = d.querySelector('[name="year"]');
			const month = d.querySelector('[name="month"]');
			if (year && month) calendar(new Date(year.value + '/' + month.options[month.selectedIndex].value + '/1'));
		});
	});
	
	let toggleBtn = d.querySelector('.toggle-calendar');
	if (toggleBtn) {
		toggleBtn.addEventListener('click', evt => {
			leaf_page.classList.remove('user-event-show');
			leaf_page.classList.add('panel-show');
		});
	}
	
	const dataBtn = d.querySelector('.data-btn');
	if (dataBtn) {
		dataBtn.addEventListener('click', evt => {
			leaf_page.classList.remove('panel-show');
			leaf_page.classList.add('user-event-show');
			updateEventList(getUserEvents());
		});
	}
	
	let resetBtn = d.querySelector('.reset-btn');
	if (resetBtn) {
		resetBtn.addEventListener('click', resetDate);
	}

	const main_page = d.querySelector('.main');
	if (main_page) {
		main_page.addEventListener('swiped', evt => {
			switch (evt.detail.dir) {
				case 'left':
					$today.setMonth($today.getMonth() + 1);
					break;
				case 'right':
					$today.setMonth($today.getMonth() - 1);
					break;
				case 'up':
					$today.setDate($today.getDate() + 1);
					break;
				case 'down':
					$today.setDate($today.getDate() - 1);
					break;
			}
			update($today);
		}, {passive: true});

		main_page.addEventListener('wheel', evt => {
			let dir = evt.deltaY > 0 ? -1 : 1;
			$today.setDate($today.getDate() + dir);
			update($today);
		}, {passive: true});

		main_page.addEventListener('dblclick', resetDate);

		var timer = false;
		main_page.addEventListener('click', () => {
			if(!timer) {
				timer = setTimeout(() => {
					timer = null;
				}, 600);
			} else {
				timer = null;
				clearTimeout(timer);
				resetDate();
			}
		});
		main_page.addEventListener('touchmove', () => {
			timer = null;
			clearTimeout(timer);
		});
	}
	
	const panel_page = d.querySelector('.panel');
	if (panel_page) {
		panel_page.addEventListener('swiped', evt => {
			switch (evt.detail.dir) {
				case 'left':
					$today.setYear($today.getFullYear() + 1);
					break;
				case 'right':
					$today.setYear($today.getFullYear() - 1);
					break;
				case 'up':
					$today.setMonth($today.getMonth() + 1);
					break;
				case 'down':
					$today.setMonth($today.getMonth() - 1);
					break;
			}
			update($today);
		}, {passive: true});
		panel_page.addEventListener('wheel', evt => {
			let dir = evt.deltaY > 0 ? -1 : 1;
			$today.setMonth($today.getMonth() + dir);
			update($today);
		}, {passive: true});
	}
}

export const renderAccount = user => {
	const signin = d.querySelector('.signin-btn');
	const dataBtn = d.querySelector('.data-btn');

	if (signin) signin.hidden = !!user;
	if (dataBtn) dataBtn.hidden = !user;
};
