import React from 'react';
import './Navbar.css';


const Navbar = ({ isScrolling }) => {
    const toTheTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};


    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>
                <h3 className='border border-white border-2 p-2 mt-2 fw-light rounded-1'>
                CARO ARAYA
                </h3>
            </div>

        </nav>
    )
}

export default Navbar
