import React from "react";
import './Slider.css';
import Image01 from '../../media/todolist.png';
import Image02 from '../../media/starWars.gif';
import Image03 from '../../media/appDogs.png';

const slidesInfo = [
    {
        src:Image02,
        alt:"Proyect 1",
        description:"BLOG STAR WARS"
    },
    {
        src:Image03,
        alt:"Proyect 2",
        description:"APP WALK-DOGS"
    },
    {
        src:Image01,
        alt:"Proyect 3",
        description:"TODO-LIST"
    }
]

const slides = slidesInfo.map(slide => (
    <div className="slide-container text-light">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-description">
            <span>{slide.description}</span>
            
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