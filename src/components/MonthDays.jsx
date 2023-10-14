import Day from './Day';

const MonthDays = ({ activeMonth, setSelectedDays }) => {
	return (
		<div className='month-days'>
			{activeMonth.map((dayObj, id) => (
				<Day
					key={id}
					dayObj={dayObj}
					setSelectedDays={setSelectedDays}
				/>
			))}
		</div>
	);
};

export default MonthDays;
