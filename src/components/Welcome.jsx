import React from 'react';

const Welcome = (props) => {
	const handleLogout = (e) => {
		e.preventDefault();
		props.setUsername('');
	};

	return (
		<div>
			Welcome {props.username}!
			<input
				type='submit'
				class='btn btn-primary'
				value='Logout'
				onClick={handleLogout}
			/>
		</div>
	);
};

export default Welcome;
