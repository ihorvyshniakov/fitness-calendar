import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';

const NavigationBar = ({ activeDate, setActiveDate }) => {
	const handlePrevMonth = () => {
		setActiveDate(prevDate => prevDate.month(prevDate.month() - 1));
	};

	const handleNextMonth = () => {
		setActiveDate(prevDate => prevDate.month(prevDate.month() + 1));
	};

	return (
		<div className='top-navigation'>
			<div className='year'>{activeDate.format('YYYY MMMM')}</div>
			<div className='navigations'>
				<div className='chevron-left' onClick={handlePrevMonth}>
					<ChevronLeft />
				</div>
				<div className='chevron-right' onClick={handleNextMonth}>
					<ChevronRight />
				</div>
			</div>
		</div>
	);
};

export default NavigationBar;
