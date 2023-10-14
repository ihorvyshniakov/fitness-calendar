import Day from './Day';

const MonthDays = ({ activeMonth, selectedDays, setSelectedDays }) => {
	return (
		<div className='month-days'>
			{activeMonth.map((dayObj, id) => (
				<Day
					key={id}
					dayObj={dayObj}
					selectedDays={selectedDays}
					setSelectedDays={setSelectedDays}
				/>
			))}
		</div>
	);
};

export default MonthDays;
