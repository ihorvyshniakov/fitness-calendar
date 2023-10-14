import { useEffect, useState } from 'react';
import * as dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';

import { generateMonthDays } from './components/helpers/Functions';

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
	const [selectedDays, setSelectedDays] = useState([]);

	const handlePrevMonth = () => {
		setActiveDate(prevDate => prevDate.month(prevDate.month() - 1));
	};

	const handleNextMonth = () => {
		setActiveDate(prevDate => prevDate.month(prevDate.month() + 1));
	};

	useEffect(() => {
		// localStorage.setItem('selectedDays', selectedDays);
		console.log('selectedDays: ', selectedDays);
	}, [selectedDays]);

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
						<div className='chevron-left' onClick={handlePrevMonth}>
							<ChevronLeft />
						</div>
						<div
							className='chevron-right'
							onClick={handleNextMonth}
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
							activeDate.startOf('month').day(),
							activeDate
						).map((dayObj, id) =>
							dayObj ? (
								<div
									key={`day-${id + 1}`}
									className='cell day'
									data-date={`${dayObj.day}/${dayObj.month}/${dayObj.year}`}
									onClick={e => {
										e.target.classList.toggle('active');
										setSelectedDays(selectedDaysArray => {
											return [
												...selectedDaysArray,
												e.target.dataset.date
											];
										});
									}}
								>
									<p>{dayObj.day}</p>
								</div>
							) : (
								<div key={`day-${id + 1}`} className='cell day'>
									<p></p>
								</div>
							)
						)}
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
