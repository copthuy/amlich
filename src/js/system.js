"use strict";

import bookmarkIcon from '../images/bookmark.svg';
import calendarIcon from '../images/calendar.svg';
import calendarCheckIcon from '../images/calendar-check.svg';
import checkIcon from '../images/check.svg';
import closeIcon from '../images/close.svg';
import undoIcon from '../images/undo.svg';
import userIcon from '../images/user.svg';

export const w = window;
export const d = document;

const icons = {
	bookmark: bookmarkIcon,
	calendar: calendarIcon,
	'calendar-check': calendarCheckIcon,
	check: checkIcon,
	close: closeIcon,
	undo: undoIcon,
	user: userIcon,
};

const icon = name => `<img src="${icons[name]}" alt="${name}" class="icon">`;

export const bookmark_icon = icon('bookmark');
export const calendar_icon = icon('calendar');
export const calendar_check_icon = icon('calendar-check');
export const check_icon = icon('check');
export const close_icon = icon('close');
export const undo_icon = icon('undo');
export const user_icon = icon('user');

export let $today = new Date();
