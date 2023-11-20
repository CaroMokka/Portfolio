import React from "react";
import "./About.css";
// import ImageProfile from "../../media/caro.jpg";
import titleAbout from "../../media/title-aboutme-01.webp";
// import Spinning from "../Spinning/Spinning";
// import typoCV from "../../media/CV.webp";

const About = () => {

  //debe ser unna function asincrona
  //el enlace de pdf tiene que estar en la nube (drive?)
  const downloadCV = () => {
    console.log('descraga el maldito odf')
    let pdf = "https://www.google.com/search?q=cv+imagenes&rlz=1C5CHFA_enCL786CL786&oq=cv+image&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIGCAIQRRhAMgcIAxAAGIAEMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHtIBCTIzNjZqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8#vhid=US_uOtxGhYPn0M&vssid=l";
    let windowOpen = '_blank'
    let enlace = document.createElement("a");
    enlace.href = pdf;
    enlace.target = windowOpen;
    enlace.download = "Carolina_Araya_cv.pdf";
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
            <img className="title-aboutme" alt='frontend' src={titleAbout} />
          </div>
          <div className="about-description">
            <p className="about-p">
              Llevo +1 año de experiencia en el mundo digital. Me considero
              curiosa en esencia, apasionada y perseverante. Ultimamente me
              encontré con algo llamado UX. Disfruto explorando e investigando
              nuevos mundos. Si bien mis proyectos están relacionados al
              desarrollo web, este recorrido me ha permitido conocer y trabajar
              con una diversidad de personas, entre ellas diseñador@s. Aquí es
              donde me encuentro ahora, con un encanto por el UX/UI. Actualmente
              me encuentro becada y cursando el Programa de Certificación UX de
              Google.
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
