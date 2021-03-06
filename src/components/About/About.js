import React from "react";
import ImageProfile from "../../media/caro.jpg";
import "./About.css";

const About = () => {
	return (
		<div className="about-container text-uppercase">
			<div className="about-description">
				<h3 className="about-h3">Hola soy Carolina,</h3>
				<p className="about-p">Desarrolladora Web Junior Certificada de 4GeeksAcademy, extremadamente curiosa y amo el aprendizaje continuo. Hace unos meses decidí embarcarme en un nuevo desafío, el código. 
				<br/>
				<br/>
				Tengo un Título de Animador Digital 3D en Arcos.   Me considero una persona inquieta y apasionada. Me siento afortunada de tener esta oportunidad y de asumir este nuevo desafío en mi vida.  Creo rotundamente que los cambios siempre son para bien y me emociona pensar que la tecnología nos llevará por nuevos rumbos.</p>
			</div>
			
			<div className="about-img">
				<img src={ImageProfile} alt="about" />
			</div>
		</div>
	);
};

export default About;
