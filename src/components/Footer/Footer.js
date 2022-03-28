import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container text-uppercase">
            <div className="footer-info fw-lighter">
                <h1>Carolina Araya González</h1>
                <p>Santiago, Chile</p>
            </div>
            <div className="footer-contact fw-lighter">
                <h3>Contáctame</h3>
                <p>Y pongámonos manos a la obra</p>
            </div>
            <div className="footer-sns">
                <div className="Design-by fw-light mb-2">
                    Hecho por Carolina Araya González
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/carolina-araya-gonzalez/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/CaroMokka" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                  
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
