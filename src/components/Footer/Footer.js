import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container text-uppercase">
            <div className="footer-info fw-lighter">
                <h1>Carolina Araya González</h1>
                <p><i class="fa-solid fa-map-location-dot"></i><span className='mx-4'>Santiago, Chile</span></p>
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
                    <a href=" mailto:ci.arayagonzalez@gmail.com?subject=Quiero%20contactarme%20contigo%20Carolina&body=Hola%2C%20te%20contacto%20desde%20tu%20portafolio.%0D%0AMe%20gustar%C3%ADa%20hablar%20sobre%20una%20oportunidad%20de%20proyecto%20y%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20lo%20que%20haces%2C%20estar%C3%A9%20atent%40 " target="_blank" rel="noreferrer"><i class="fa-solid fa-envelope envelope"></i></a>

                </div>
            </div>

        </footer>
    )
}

export default Footer


