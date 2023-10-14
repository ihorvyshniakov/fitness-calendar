import { WEEK_DAYS } from './helpers/dateSetup';

const WeekDaysTitles = () => {
	return (
		<div className='month-titles'>
			{WEEK_DAYS.map((title, id) => (
				<div key={id} className='cell month-title'>
					<p>{title}</p>
				</div>
			))}
		</div>
	);
};

export default WeekDaysTitles;
