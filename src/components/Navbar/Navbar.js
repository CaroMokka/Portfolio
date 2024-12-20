import React from 'react';
import './Navbar.css';
import logo from '../../media/logo-06.png'


const Navbar = ({ isScrolling }) => {
    const toTheTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};


    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>
                <img src={logo} />
            </div>

        </nav>
    )
}

export default Navbar
