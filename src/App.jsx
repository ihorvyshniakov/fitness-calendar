import './App.scss';

import { useEffect, useState } from 'react';
import {
	generateMonthDaysArray,
	getLocalValue,
	saveLocalValue
} from './components/helpers/functions';
import { NOW } from './components/helpers/dateSetup';
import WeekDaysTitles from './components/WeekDaysTitles';
import Logo from './components/Logo';
import MonthDays from './components/MonthDays';
import NavigationBar from './components/Navigation';

const App = () => {
	const [activeDate, setActiveDate] = useState(NOW);
	const [selectedDays, setSelectedDays] = useState(
		getLocalValue('selectedDays') || []
	);
	const [activeMonth, setActiveMonth] = useState(
		generateMonthDaysArray(activeDate, NOW)
	);

	useEffect(() => {
		setActiveMonth(generateMonthDaysArray(activeDate, NOW));
	}, [activeDate]);

	useEffect(() => {
		saveLocalValue('selectedDays', selectedDays);
		setActiveMonth(prev =>
			prev.map(el => {
				if (el) {
					return {
						...el,
						isActive: selectedDays.includes(el.date)
					};
				}
				return el;
			})
		);
	}, [selectedDays]);

	return (
		<>
			<Logo />
			<h1>Fitness calendar</h1>
			<div className='calendar'>
				<NavigationBar
					activeDate={activeDate}
					setActiveDate={setActiveDate}
				/>
				<div className='month'>
					<WeekDaysTitles />
					<MonthDays
						activeMonth={activeMonth}
						setSelectedDays={setSelectedDays}
					/>
				</div>
			</div>
		</>
	);
};

export default App;
