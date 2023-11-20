import React from 'react';
import './Footer.css';
//import pez from '../../media/pez.webp'

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
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/carolina-araya-gonzalez/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/CaroMokka" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="mailto:ci.arayagonzalez@gmail.com?subject=Quiero%20contactarme%20contigo%20Carolina&body=Hola!%20te%20contacto%20desde%20tu%20portafolio.%20Me%20gustaria%20hablar%20sobre%20una%20oportunidad%20de%20proyecto%20y%20saber%20mas%20informacion%20sobre%20ti.%20Quedo%20atento" target="_blank" rel="noreferrer"><i class="fa-solid fa-envelope envelope"></i></a>

                </div>
                <div className="design-by">
                made with love by caro araya 2023
                </div>
                {/* <div className='container-pez'>
                    <img src={pez} />
                </div> */}
            </div>

        </footer>
    )
}

export default Footer


