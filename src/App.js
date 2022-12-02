import { useState } from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Signup from './components/Signup';

function App() {
	const [username, setUsername] = useState('');

	return (
		<div className='App'>
			<Navbar />
			<Signup setUsername={setUsername} />
			<Footer />
		</div>
	);
}

export default App;
