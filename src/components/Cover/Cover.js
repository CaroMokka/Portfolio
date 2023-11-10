import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";
import nameTitle from "../../media/name-02.webp";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <div className='container-title'>
        <img src={nameTitle} />
      </div>
      {/* <h2 className="cover-h1">CAROLINA ARAYA GONZÁLEZ</h2> */}
	  <p className="cover-p">Frontend | UX-UI Design </p>
	  {/* <h2 className="cover-a">OPEN TO WORK *</h2> */}
    </div>
  );
};

export default Cover;
