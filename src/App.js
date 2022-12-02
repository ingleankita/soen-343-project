import { useState } from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Signup from './components/Signup';
import Welcome from './components/Welcome';

function App() {
	const [username, setUsername] = useState('');

	if (username == '') {
		return (
			<div className='App'>
				<Navbar username={username} />
				<Signup setUsername={setUsername} />
				<Footer />
			</div>
		);
	} else {
		return (
			<div>
				<Navbar username={username} setUsername={setUsername} />
				<Welcome username={username} />
				<Footer />
			</div>
		);
	}
}

export default App;
