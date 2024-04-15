import React from "react";
import backgroundVideo from '../../assets/background/fusion-digital-background.mp4';
import "./BackgroundVideo.scss";

const BackgroundVideo =() => {
  return (
    <div className="background-video">
      <video autoPlay loop muted disablePictureInPicture >
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
    </div>
  );
};

export default BackgroundVideo;