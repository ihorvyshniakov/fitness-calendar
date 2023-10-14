const Day = props => {
	const { dayObj, setSelectedDays } = props;

	if (!dayObj) {
		return (
			<div className='cell day'>
				<p></p>
			</div>
		);
	}

	const { dayNumber, date, isActive, isCurrentDay } = dayObj;

	const handleSelectedDay = () => {
		setSelectedDays(selectedDaysArray => {
			if (isActive) {
				return selectedDaysArray.filter(day => day !== date);
			}
			return [...selectedDaysArray, date];
		});
	};

	return (
		<div
			className={`cell day${isCurrentDay ? ' currentDay' : ''}${
				isActive ? ' active' : ''
			}`}
			onClick={handleSelectedDay}
		>
			<p>{dayNumber}</p>
		</div>
	);
};

export default Day;
