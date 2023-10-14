import avocadoPNG from '../assets/avocado.png';

const Logo = () => {
	return (
		<div className='logo'>
			<img
				src={avocadoPNG}
				className='logo'
				alt='Fitness avocado image'
			/>
		</div>
	);
};

export default Logo;
