import React from "react";
import "./About.css";
// import ImageProfile from "../../media/caro.jpg";
import titleAbout from "../../media/title-aboutme-01.webp";
// import Spinning from "../Spinning/Spinning";
// import typoCV from "../../media/CV.webp";

const About = () => {
  //debe ser unna function asincrona
  const downloadCV = () => {
    console.log("descraga el maldito odf");
    let pdf = 'https://docs.google.com/document/d/1E32XwgwBeftRqCyKDBR-mc7DkE1jUZmm3lUrxqZV35o';
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
            <img className="title-aboutme" alt="frontend" src={titleAbout} />
          </div>
          <div className="about-description">
            <p className="about-p">
              Soy Caro, Desarrolladora Front-end y titulada en Animación Digital
              en Arcos. Con +1 año de experiencia desarrollando HTML5, CSS3,
              Javascript, React, Vtex IO, entre otras tecnologías. Actualmente
              me encuentro becada y cursando el Programa de Certificación UX de
              Google. Lo que ha sido todo un descubrimiento maravilloso en el
              mundo del diseño UX-UI. Enfocada en seguir creciendo
              profesionalmente, mi meta es lograr complementar ambos mundos. De
              modo que el desarrollo y el diseño convivan en mi.
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
