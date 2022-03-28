import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-info">
                <h1>Carolina Araya G.</h1>
                <p>Based in Santiago, Chile</p>
            </div>
            <div className="footer-contact">
                <h3>Contáctame</h3>
                <p>Y pongámonos manos a la obra</p>
            </div>
            <div className="footer-sns">
                <div className="Design-by">
                    Hecho por Carolina Araya G.
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/carolina-araya-gonzalez/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/CaroMokka" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
