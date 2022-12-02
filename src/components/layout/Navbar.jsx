import React from 'react';

const Navbar = () => {
	return (
		<nav class='navbar navbar-expand-md'>
			<a class='navbar-brand' href='#'>
				<image src='' />
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
		</nav>
	);
};

export default Navbar;
