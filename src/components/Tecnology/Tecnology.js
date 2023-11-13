import React from 'react';
import './Tecnology.css';

const Tecnology = () => {
  return (
    <div className='tecno-container'>
        {/* <div className='border-top mb-5'></div> */}
        <div className='tecno-description'>
        <h3 className='tecno-title'>
            Tecnologías
        </h3>
        <div className='d-flex justify-content-around display-2 text-black'>
        <i class="fa-brands fa-html5"/>
        <i class="fa-brands fa-css3"></i>
        <i class="fa-brands fa-js"></i>
        <i class="fa-brands fa-bootstrap"></i>
        <i class="fa-brands fa-figma"></i>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-git-alt"></i>
        {/* <i class="fa-brands fa-python"></i> */}
        </div>
    </div>
    <div className='border-bottom mt-5'></div>
    </div>
  )
}

export default Tecnology