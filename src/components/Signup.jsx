import React, { useState } from 'react';

const Signup = (props) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault(); // prevent the page from reloading on Submit

		if (firstName != '' && lastName != '')
			// do not submit if form is not empty
			props.setUsername(firstName + ' ' + lastName);

		// test if everything was set properly
		console.log(firstName + ' ' + lastName);
		console.log(email);
		console.log(password);

		clearForm();
	};

	const clearForm = () => {
		// on Submit reset values to empty
		setFirstName('');
		setLastName('');
		setEmail('');
		setPassword('');
	};

	return (
		<div>
			<form>
				<div>
					<input
						type='text'
						placeholder='firstName'
						onChange={(e) => {
							setFirstName(e.target.value); // anonymous function for setting first name value
						}}
						value={firstName} // get value of input from state
					/>
					<input
						type='text'
						placeholder='lastName'
						onChange={(e) => {
							setLastName(e.target.value); // anonymous function for setting last name value
						}}
						value={lastName} // get value of input from state
					/>
					<input
						type='email'
						placeholder='email'
						onChange={(e) => {
							setEmail(e.target.value); // anonymous function for setting email value
						}}
						value={email} // get value of input from state
					/>
					<input
						type='password'
						placeholder='password'
						onChange={(e) => {
							setPassword(e.target.value); // anonymous function for setting password value
						}}
						value={password} // get value of input from state
					/>
				</div>
				<div className='btns'>
					<input
						type='submit'
						className='btn btn-light search-btn'
						value='Submit'
						class='btn btn-primary'
						onClick={handleSubmit}
					/>
				</div>
			</form>
		</div>
	);
};

export default Signup;
