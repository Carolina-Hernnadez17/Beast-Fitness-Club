import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoGallery = () => {
  return (
    <div className="container video-gallery">
      <h1 className='home-page-title video-gallery-club'>Mantengamonos saludables</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="embed-responsive embed-responsive-16by9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/maz9nPMc_Ps?si=skC1MmnMJNKwlU-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <div className="col-md-6">
          <div className="embed-responsive embed-responsive-16by9">
          <iframe width="560" height="309" src="https://www.youtube.com/embed/CSjRBBqfhko?si=NPVSCUkN7n4Pnx3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
