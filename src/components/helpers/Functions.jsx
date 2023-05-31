export const generateMonthDays = (daysInMonth, firstDayOfWeek) => {
	let result = [...Array(42)];
	result = result.map((item, id) => {
		const id1 = id + 1;
		return id1 <= daysInMonth ? id1 : null;
	});
	for (let i = 1; i < (firstDayOfWeek == 0 ? 7 : firstDayOfWeek); i++) {
		result.unshift(null);
		result.pop();
	}

	return result;
};
