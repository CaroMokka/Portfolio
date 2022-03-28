import React from 'react';
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4';


const Cover = () => {
	return (
		<div className="cover-container">
			<video className="video" src={coverVideo} autoPlay loop muted />
			<h1 className="cover-h1">Carolina Araya González</h1>
			<p className="cover-p">
				Developer | Designer | Animation {" "}
			</p>
		</div>
	);
};

export default Cover;

