import React from 'react';
import Carousel, { slidesToShowPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slides';
import './Slider.css';



/* LEER DOCUMENTACION DE COMPONENTE CAROUSEL */
const Slider = () => {
    return (
        <div className="carousel-container text-light">
            <div className="carousel-title">
                <h2 className="carousel-h2">PROYECTOS</h2>
            </div>
            <Carousel
                plugins={['centered','infinite','arrows',{
                    resolve: slidesToShowPlugin,
                    options : { numberOfSlides: 3 }
                }]}

                animationSpeed={200}
                offset={50}
                itemWidth={400}
                slides={Slides}

                breakpoints={{
                    960: {
                        plugins:['infinite',{ 
                        resolve: slidesToShowPlugin,
                        options: {numberOfSlides: 1},
                        
                    }],
                    itemWidth: 250
                }, 
                    
                }}
            />
        </div>
    )
}

export default Slider

/* {
    resolve: slidesToShowPlugin,
    options = { numberOfSlides: 2 }
} */

/* slidesPerPage={3} */


{/* <Carousel
                plugins={['centered','infinite','arrows',{
                    resolve: slidesToShowPlugin,
                    options : { numberOfSlides: 3 }
                }]}
                
                
                animationSpeed={200}
                
                offset={50}
                itemWidth={400}
                slides={Slides}
                breakpoints={{
                    960: {
                        numberOfSlides: 1,
                        arrows: false,
                        itemWidth: 250,
                    }
                }}
            /> */}