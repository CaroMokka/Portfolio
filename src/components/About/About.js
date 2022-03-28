import React from "react";
import Image from "../../media/caro.png";
import "./About.css";

const About = () => {
	return (
		<div className="about-container">
			<div className="about-description">
				<h3 className="about-h3">Hola soy Carolina</h3>
				<p className="about-p">Desarrolladora Web Junior Certificada de 4GeeksAcademy, extremadamente curiosa y amo el aprendizaje continuo. Hace unos meses decidí embarcarme en un nuevo desafío, el código. 
				<br/>
				<br/>
				Tengo un Titulo de Animador Digital 3D en Arcos.   Me considero una persona inquieta y apasionada. Me siento afortunada de tener esta oportunidad y de asumir este nuevo desafío en mi vida.  Creo rotundamente que los cambios siempre son para bien y la tecnología llego para cambiar mi vida.</p>
			</div>
			<div className="about-img">
				<img src={Image} alt="about" />
			</div>
		</div>
	);
};

export default About;
