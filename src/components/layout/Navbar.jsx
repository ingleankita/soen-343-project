import React from 'react';

const Navbar = (props) => {
	if (props.username == '')
		return (
			<nav class='navbar navbar-expand-md justify-content-between'>
				<div class='nav'>
					<a class='navbar-brand' href='#'>
						<img
							src='/docs/4.0/assets/brand/bootstrap-solid.svg'
							width='30'
							height='30'
							alt=''
						/>
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
						<img
							src='/docs/4.0/assets/brand/bootstrap-solid.svg'
							width='30'
							height='30'
							alt=''
						/>
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
					</ul>
					<div class='user'>Logged in as: {props.username}</div>
				</div>
			</nav>
		);
};

export default Navbar;
