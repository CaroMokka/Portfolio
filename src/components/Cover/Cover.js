import React from "react";
import Spinning from '../../components/Spinning/Spinning'
import "./Cover.css";
import coverVideo from "../../media/cover-02.mov";
import nameTitle from "../../media/name.png";
import arterisco from "../../media/arterisco.webp";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" preload="none" src={coverVideo} autoPlay loop muted />
      <div className='container-title'>
        <img src={nameTitle} />
      </div>
      {/* <h2 className="cover-h1">CAROLINA ARAYA GONZÁLEZ</h2> */}
	  <p className="cover-p">FRONTEND DEVELOPER</p>
	  {/* <h2 className="cover-a">OPEN TO WORK *</h2> */}
    <div className='container-spinning'>
    <Spinning  text='FRONTEND DEVELOPER * CARO ARAYA * '><div className='container-arterisco'><img src={arterisco}/></div></Spinning>
    </div>
    </div>
  );
};

export default Cover;
