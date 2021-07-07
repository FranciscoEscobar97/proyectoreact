import React from 'react';
import './Header.css';
// Imagen


function Header({ title,subtitle }) {
	return (
		<div className='Header'>
			<h1>{title}</h1>
            <h3>{subtitle}</h3>
		</div>
	);
}

Header.defaultProps = {
	title: 'MOON',
    subtitle: 'Eleva tus sentidos',
};

export default Header;