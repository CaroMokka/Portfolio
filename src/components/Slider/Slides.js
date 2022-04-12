import React from "react";
import './Slider.css';
import StarWars from '../../media/starwars.gif';
import Spotify from '../../media/spotify.gif';


const slidesInfo = [
    {
        src: StarWars,
        alt:"Proyect 1",
        description:"Blog Star Wars",
        link: "https://github.com/CaroMokka/StarWars-Frontend-Backend.git"
    },
    {
        src:"https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
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
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-description">
            <span>{slide.description}</span>
            <a href={slide.link} target="_blank"><i className="fa-brands fa-github"></i></a>
        </div>
    </div>
))
export default slides;