const Day = props => {
	const { dayObj, setSelectedDays } = props;

	return dayObj ? (
		<div
			className='cell day'
			data-date={`${dayObj.day}/${dayObj.month}/${dayObj.year}`}
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
			<p>{dayObj.day}</p>
		</div>
	) : (
		<div className='cell day'>
			<p></p>
		</div>
	);
};

export default Day;
