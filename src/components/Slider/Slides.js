import React from "react";
import './Slider.css';
import StarWars from '../../media/starWars.gif';
import Spotify from '../../media/spotify.gif';


const slidesInfo = [
    {
        src: StarWars,
        alt:"Proyect 1",
        description:"Blog Star Wars",
        link: "https://github.com/CaroMokka/StarWars-Frontend-Backend.git"
    },
    {
        src:Image03,
        alt:"Proyect 2",
        description:"App Walk-Dogs",
        link: "https://github.com/CaroMokka/Proyecto-Final.git"
    },
    {
        src: Spotify,
        alt:"Proyect 3",
        description:"API-Spotify",
        link: "https://github.com/CaroMokka/AppWeb-FullStack-SpotifyAPI.git"
    }
]

const slides = slidesInfo.map(slide => (
    <div className="slide-container text-light">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-description">
            <span>{slide.description}</span>
            <a href={slide.link} target="_blank"><i className="fa-brands fa-github"></i></a>
        </div>
    </div>
))
export default slides;

/*

"https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg" 
"https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg"
"https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg"


*/


{/* <a href="#"><i class="fa-brands fa-github"></i></a> */}