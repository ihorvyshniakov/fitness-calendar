import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

// setup of Day.js
dayjs.extend(localeData);

export const NOW = dayjs();

export const WEEK_DAYS = shiftArrayToOneElementLeft(dayjs.weekdaysShort());

function shiftArrayToOneElementLeft(array) {
	let a = [...array];
	a.push(...a.splice(0, 1));
	return a;
}
