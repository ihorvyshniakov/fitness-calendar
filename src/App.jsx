import avocadoPNG from './assets/avocado.png';
import './App.css';

function App() {
	return (
		<>
			<div className='loader'>
				<div className='logo'>
					<img
						src={avocadoPNG}
						className='logo'
						alt='Fitness avocado image'
					/>
				</div>
				<h1>Fitness calendar</h1>
			</div>
		</>
	);
}

export default App;
