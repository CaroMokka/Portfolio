import React from "react";
import ImageProfile from "../../media/caro.jpg";
import "./About.css";

const About = () => {
	return (
		<div className="about-container text-uppercase">
			<div className="about-description">
				<h3 className="about-h3">Sobre mi</h3>
				<p className="about-p">
				+1 año de experiencia como Frontend. Soy curiosa, apasionada y perseverante, amante del mundo digital. De Frontend a diseño UX/UI, me gusta explorar e investigar cosas nuevas, siempre con el foco hacia un crecimiento constante. Mis proyectos han estado relacionados al desarrollo web, lo que me ha permitido conocer y trabajar con una gran diversidad de personas, entre ellas diseñadores. Actualmente me encuentro becada cursando el Programa de Certificación UX de Google.
				</p>
			</div>
			
			<div className="about-img">
				<img src={ImageProfile} alt="about" />
			</div>
		</div>
	);
};

export default About;
