import React from "react";
import imageWhoWeAre from '../img/who-we-are.png'
import CommentSection from './CommentSection';
import '../styles/AboutUsSection.css'
const AboutUsSection: React.FC = () => {

  return (
    <div className="container-about-us w-full p-4">
      <div className="relative w-full mx-auto div-information">
        <div className="container-information">
          <h1 className="text-2xl font-bold mb-2">Who We Are</h1>
          <p className="mb-1 text-gray-500">Problems trying to resolve the conflict between</p>
          <p className="mb-1 text-gray-500">the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
        <div className="container-image mt-4">
          <img src={imageWhoWeAre} alt="Presentation Who we are" className="w-1/2 mt-20 mb-20 h-auto mx-auto" />
        </div>
        <div className="background-overlay w-full"></div>
      </div>
      <div className="container-comment-section">
        <CommentSection />
      </div>
    </div>
  );
}

export default AboutUsSection;