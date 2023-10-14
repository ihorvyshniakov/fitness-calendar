const Day = props => {
	const { dayObj, setSelectedDays } = props;

	if (!dayObj) {
		return (
			<div className='cell day'>
				<p></p>
			</div>
		);
	}

	const { dayNumber, date, isCurrentDay } = dayObj;

	return (
		<div
			className={`cell day ${isCurrentDay ? 'currentDay' : ''}`}
			data-date={date}
			onClick={e => {
				const isActive = e.target.classList.contains('active');
				if (isActive) {
					e.target.classList.remove('active');
					setSelectedDays(selectedDaysArray => {
						return selectedDaysArray.filter(
							day => day !== e.target.dataset.date
						);
					});
				} else {
					e.target.classList.add('active');
					setSelectedDays(selectedDaysArray => [
						...selectedDaysArray,
						e.target.dataset.date
					]);
				}
			}}
		>
			<p>{dayNumber}</p>
		</div>
	);
};

export default Day;
