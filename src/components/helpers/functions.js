export const getLocalValue = name => JSON.parse(localStorage.getItem(name));

export const saveLocalValue = (name, value) => {
	localStorage.setItem(name, JSON.stringify(value));
};

export const generateMonthDaysArray = (activeDate, currentDate) => {
	const daysInMonth = activeDate.daysInMonth();
	const firstDayOfWeek = activeDate.startOf('month').day();

	let result = [...Array(42)];

	// add days of month to array
	result = result.map((item, id) => {
		const dayNumber = id + 1;
		const month = activeDate.month() + 1;
		const year = activeDate.year();
		const date = `${dayNumber}/${month}/${year}`;

		return dayNumber <= daysInMonth
			? {
					dayNumber,
					date,
					isCurrentDay: currentDate.format('DD/MM/YYYY') === date
			  }
			: null;
	});

	// shift table elements to proper firstDayOfWeek
	for (let i = 1; i < (firstDayOfWeek == 0 ? 7 : firstDayOfWeek); i++) {
		result.unshift(null);
		result.pop();
	}

	return result;
};
