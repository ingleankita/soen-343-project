import React from 'react';
import Logo from '../image.png';

const Navbar = (props) => {
	const handleLogout = (e) => {
		e.preventDefault();
		props.setUsername('');
	};
	if (props.username == '')
		return (
			<nav class='navbar navbar-expand-md justify-content-between'>
				<div class='nav'>
					<a class='navbar-brand' href='#'>
						<img src={Logo} width='110' height='110' alt='' />
					</a>
					<ul class='navbar-nav mr-auto'>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								ABOUT US
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								SERVICES
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								EVENTS
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								VOLUNTEER
							</a>
						</li>
						<li class='nav-item active'>
							<a class='nav-link' href='#'>
								LOGIN/SIGNUP
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	else
		return (
			<nav class='navbar navbar-expand-md justify-content-between'>
				<div class='nav'>
					<a class='navbar-brand' href='#'>
						<img src={Logo} width='110' height='110' alt='' />
					</a>
					<ul class='navbar-nav mr-auto'>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								ABOUT US
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								SERVICES
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								EVENTS
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								VOLUNTEER
							</a>
						</li>
						<li class='nav-item'>Logged in as: {props.username}</li>
						<li class='nav-item'>
							<input
								type='submit'
								class='btn logout'
								value='Logout'
								onClick={handleLogout}
							/>
						</li>
					</ul>
				</div>
			</nav>
		);
};

export default Navbar;
