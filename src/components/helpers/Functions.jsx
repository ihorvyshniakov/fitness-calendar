export const generateMonthDays = (daysInMonth, firstDayOfWeek, activeDate) => {
	let result = [...Array(42)];
	// add days of month to array
	result = result.map((item, id) => {
		const id1 = id + 1;
		return id1 <= daysInMonth
			? {
					day: id1,
					month: activeDate.month() + 1,
					year: activeDate.year()
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
