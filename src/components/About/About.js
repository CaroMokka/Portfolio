import React from "react";
import "./About.css";
// import ImageProfile from "../../media/caro.jpg";
import titleAbout from "../../media/img-about.png";
// import Spinning from "../Spinning/Spinning";
// import typoCV from "../../media/CV.webp";

const About = () => {
  //debe ser unna function asincrona
  const downloadCV = () => {
    //let pdf = 'https://docs.google.com/document/d/1E32XwgwBeftRqCyKDBR-mc7DkE1jUZmm3lUrxqZV35o';
    let pdf = 'https://docs.google.com/document/d/1NMyZMaKvCYA2FHWQHXZ1gPijCBvvcN21bp5b_c6ouv0';
    let windowOpen = "_blank";
    let enlace = document.createElement("a");
    enlace.href = pdf;
    enlace.target = windowOpen;
    enlace.download = "CV-Carolina Araya.pdf";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  };

  return (
    <>
      <div className="about-container text-uppercase">
        {/* <h3 className="about-h3">Sobre mi</h3> */}
        <div className="wrapper-aboutme">
          <div className="container-aboutme">
            <img className="title-aboutme-img" alt="frontend" src={titleAbout} />
          </div>
          <div className="about-description">
            <h1 className="title-aboutme" >¡Hola, soy Caro!</h1>
            <p className="about-p">
            Desarrolladora Frontend y titulada en Animación Digital. Con +1 año de experiencia desarrollando HTML, CSS, Javascript, Typescript, React, Vtex IO entre otras. 
            <br/>
            Mi travesía en el desarrollo ha sido un viaje de aprendizaje constante, tanto en el ámbito profesional como personal. Me considero apasionada, perseverante y curiosa. Autodidacta en esencia, siempre estoy aprendiendo y experimentando cosas nuevas ligadas a la programación, y me esfuerzo por mantenerme actualizada con las últimas tendencias y mejores prácticas en el mundo del desarrollo.
            <br/>
            Además de mi experiencia técnica, valoro la colaboración y la comunicación efectiva. Creo en la importancia de trabajar en equipo para alcanzar metas comunes y aprender unos de otros.
            </p>
          </div>
        </div>
        {/* <div className="container-link-cv">
        <a
          className="link-cv"
          href="https://docs.google.com/document/d/12A96LF9MG2hLiWukAXRpgJ3Jr2kVVfju0JOHkpHRECI/edit?usp=sharing"
        >
          Curriculum Vitae
        </a>
      </div> */}
        {/* <div className="container-cv-typo">
        <img src={typoCV} />
      </div> */}

        {/* <div className="about-img">
				<img src={ImageProfile} alt="about" />
			</div> */}
      </div>

      <div className="marquee" onClick={downloadCV}>
        <div className="marquee__inner" aria-hidden="true">
          <span>Curriculum*Vitae*</span>
          <span>Curriculum*Vitae*</span>
          <span>Curriculum*Vitae*</span>
          <span>Curriculum*Vitae*</span>
        </div>
      </div>
    </>
  );
};

export default About;
