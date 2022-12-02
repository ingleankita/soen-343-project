import React, { useState } from 'react';

const Signup = (props) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault(); // prevent the page from reloading on Submit

		if (firstName != '' && lastName != '' && email != '' && password != '')
			// do not submit if form is not empty
			props.setUsername(firstName + ' ' + lastName);
		else alert('Please fill all fields.');

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
			<h1>
				<b>SIGN UP</b>
			</h1>
			<p>
				HAVE AN ACCOUNT? <b>LOG IN NOW</b>
			</p>
			<form class='form-signin'>
				<div>
					<div class='form-input'>
						<input
							type='text'
							placeholder='FIRST NAME'
							onChange={(e) => {
								setFirstName(e.target.value); // anonymous function for setting first name value
							}}
							value={firstName} // get value of input from state
						/>
					</div>
					<div class='form-input'>
						<input
							type='text'
							placeholder='LAST NAME'
							onChange={(e) => {
								setLastName(e.target.value); // anonymous function for setting last name value
							}}
							value={lastName} // get value of input from state
						/>
					</div>
					<div class='form-input'>
						<input
							type='email'
							placeholder='EMAIL'
							onChange={(e) => {
								setEmail(e.target.value); // anonymous function for setting email value
							}}
							value={email} // get value of input from state
						/>
					</div>
					<div class='form-input'>
						<input
							type='password'
							placeholder='PASSWORD'
							onChange={(e) => {
								setPassword(e.target.value); // anonymous function for setting password value
							}}
							value={password} // get value of input from state
						/>
					</div>
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
