import { useState } from 'react';
import * as dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';

import './App.scss';

import calendarExample from './assets/calendar-example.jpeg';
import avocadoPNG from './assets/avocado.png';
import ChevronLeft from './components/icons/ChevronLeft';
import ChevronRight from './components/icons/ChevronRight';

// setup of Day.js
dayjs.extend(localeData);
dayjs.extend(updateLocale);
dayjs.extend(weekday);
dayjs.updateLocale('en', {
	weekdays: [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday'
	],
	weekdaysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
});
const now = dayjs();

const App = () => {
	const [activeDate, setActiveDate] = useState(now);

	const generateMonthDays = (daysInMonth, firstDayOfWeek) => {
		let result = [...Array(42)];
		result = result.map((item, id) => {
			const id1 = id + 1;
			return id1 <= daysInMonth ? id1 : null;
		});
		if (firstDayOfWeek == 0) {
			for (let i = 1; i < 7; i++) {
				result.unshift(null);
				result.pop();
			}
		} else {
			for (let i = 1; i < firstDayOfWeek; i++) {
				result.unshift(null);
				result.pop();
			}
		}

		return result;
	};

	// console.log(dayjs('2023-06-20').daysInMonth());
	// console.log(dayjs('2023-05-20').startOf('month').day());
	// console.log(dayjs().daysInMonth());
	// console.log(dayjs.weekdaysShort());
	// console.log('activeDate: ', activeDate.format('YYYY MMM'));

	return (
		<>
			<div className='logo'>
				<img
					src={avocadoPNG}
					className='logo'
					alt='Fitness avocado image'
				/>
			</div>
			<h1>Fitness calendar</h1>
			<div className='calendar'>
				<div className='top-navigation'>
					<div className='year'>{activeDate.format('YYYY MMMM')}</div>
					<div className='navigations'>
						<div
							className='chevron-left'
							onClick={() =>
								setActiveDate(prevDate =>
									prevDate.month(prevDate.month() - 1)
								)
							}
						>
							<ChevronLeft />
						</div>
						<div
							className='chevron-right'
							onClick={() =>
								setActiveDate(prevDate =>
									prevDate.month(prevDate.month() + 1)
								)
							}
						>
							<ChevronRight />
						</div>
					</div>
				</div>
				<div className='month'>
					<div className='month-titles'>
						{dayjs.weekdaysShort().map((title, id) => (
							<div
								key={`title-${id}`}
								className='cell month-title'
							>
								<p>{title}</p>
							</div>
						))}
					</div>
					<div className='month-days'>
						{generateMonthDays(
							activeDate.daysInMonth(),
							activeDate.startOf('month').day()
						).map((dayNumber, id) => (
							<div
								key={`day-${id + 1}`}
								className='cell day'
								onClick={e => {
									e.currentTarget.classList.toggle('active');
								}}
							>
								<p>{dayNumber}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* <div className='calendar-example'>
				<img src={calendarExample} alt='' />
			</div> */}
		</>
	);
};

export default App;
