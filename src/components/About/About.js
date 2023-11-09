import React from "react";
import ImageProfile from "../../media/caro.jpg";
import "./About.css";

const About = () => {
	return (
		<div className="about-container text-uppercase">
			<div className="about-description">
				<h3 className="about-h3">De Frontend a Diseño UX-UI</h3>
				<p className="about-p">
				Soy Caro y vivo actualmente en Santiago de Chile.
Llevo más de un año de experiencia en el mundo digital. Me considero curiosa en esencia, apasionada y perseverante. Ultimamente me encontré con algo llamado UX. Ha sido todo un descubrimiento maravilloso. Disfruto explorando e investigando nuevos mundos. Si bien mis proyectos están relacionados al desarrollo web, este recorrido me ha permitido conocer y trabajar con una diversidad de personas, entre ellas diseñador@s. Aquí es donde me encuentro ahora, con un encanto por el UX/UI. Actualmente me encuentro becada y cursando el Programa de Certificación UX de Google.
				</p>
			</div>
			
			{/* <div className="about-img">
				<img src={ImageProfile} alt="about" />
			</div> */}
		</div>
	);
};

export default About;
