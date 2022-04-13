import React from 'react';
import './Cover.css';
import coverVideo from '../../media/coverVideo01.mp4';


const Cover = () => {
	return (
		<div className="cover-container">
			<video className="video" src={coverVideo} autoPlay loop muted />
			<h2 className="cover-h1">CAROLINA ARAYA GONZÁLEZ</h2>
			<p className="cover-p">
				Web Developer {" "}
			</p>
		</div>
	);
};

export default Cover;

