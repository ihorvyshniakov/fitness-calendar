import * as dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
// import weekday from 'dayjs/locale/ua';
// import locale from 'dayjs/locale';
import 'dayjs/locale/uk';
import localeData from 'dayjs/plugin/localeData';

// import leftChevron from './assets/chevron-left.png';
// import rightChevron from './assets/chevron-right.png';
import avocadoPNG from './assets/avocado.png';
import './App.scss';

const WEEK_TITLES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

const App = () => {
	const generateDate = () => {
		dayjs.locale('uk');
		dayjs.extend(localeData);

		// dayjs().weekday(0);
		// dayjs().day(1);
		// dayjs.weekdays();
	};

	generateDate();

	return (
		<>
			<div className='logo'>
				<img
					src={avocadoPNG}
					className='logo'
					alt='Fitness avocado image'
				/>
			</div>
			<h1>Fitness calendar</h1>
			<div className='calendar'>
				<div className='top-navigation'>
					<div className='year'>{dayjs().year()}</div>
					<div className='navigations'>
						<div className='chevron-left'>
							<svg
								width='800px'
								height='800px'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z'
									stroke='#323232'
									strokeWidth='2'
								/>
								<path
									d='M13 9L10.2625 11.7375V11.7375C10.1175 11.8825 10.1175 12.1175 10.2625 12.2625V12.2625L13 15'
									stroke='#323232'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<div className='chevron-right'>
							<svg
								width='800px'
								height='800px'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M11 15L13.7158 12.2842V12.2842C13.8728 12.1272 13.8728 11.8728 13.7158 11.7158V11.7158L11 9'
									stroke='#323232'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z'
									stroke='#323232'
									strokeWidth='2'
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className='month'>
					<div className='month-titles'>
						{WEEK_TITLES.map((title, id) => (
							<div
								key={`title-${id}`}
								className='cell month-title'
							>
								<p>{title}</p>
							</div>
						))}
					</div>
					<div className='month-days'>
						{[...Array(31)].map((day, id) => (
							<div
								key={`day-${id}`}
								className='cell day'
								onClick={e => {
									console.log('id: ', id + 1);
									e.currentTarget.classList.toggle('active');
								}}
							>
								<p>{id + 1}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
