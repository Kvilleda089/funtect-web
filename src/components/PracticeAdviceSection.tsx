import React from "react";
import '../styles/PracticeAdviceSection.css'
import inconBalance from  '../img/icon-balance.jpg';
import iconMazo from '../img/icon-mazo.png';
import iconRevision from '../img/icon-revision.png';
const PracticeAdviceSection: React.FC = () => {
    return (
        <section className="section-container py-12">
            <div className="text-center mb-8">
                <h2 className="section-information-title text-3xl font-semibold">Practice Advice</h2>
                <p className="section-information-paragraph text-gray-600 mt-4">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
            </div>
            <div className="container-card flex justify-center space-x-4">
                <div className="card w-80 bg-white rounded-lg shadow-md border border-borderColor">
                    <div className="card-header flex items-center space-x-4 mb-4 ">
                        <img src={inconBalance} alt="icon-balance" className="icon w-12 h-12 ml-10 rounded-full" />
                        <h3 className="text-xl font-semibold pr-2">Frauds or Mislead</h3>
                    </div>
                    <div className="card-body text-gray-700 text-left m-7">
                        <p>- The best products start with Figma</p>
                        <p>- Design with real data</p>
                        <p>- Lightning fast prototyping</p>
                        <p>- Fastest way to organize</p>
                        <p>- Work at the speed of thought.</p>
                    </div>
                    <div className="card-button mt-4 text-left m-7">
                        <button className="text-textColorButton hover:underline">Learn More</button>
                    </div>
                </div>
    
                <div className="card w-80 bg-white rounded-lg shadow-md border border-borderColor">
                    <div className="card-header flex items-center space-x-4 mb-4">
                        <img src={iconMazo} alt="icon-mazo" className="icon w-12 h-12  ml-10 rounded-full" />
                        <h3 className="text-xl font-semibold">Bailes & Warrants</h3>
                    </div>
                    <div className="card-body text-gray-700 text-left m-7">
                        <p>- The best products start with Figma</p>
                        <p>- Design with real data</p>
                        <p>- Lightning fast prototyping</p>
                        <p>- Fastest way to organize</p>
                        <p>- Work at the speed of thought.</p>
                    </div>
                    <div className="card-button mt-4 text-left m-7">
                        <button className="text-textColorButton hover:underline">Learn More</button>
                    </div>
                </div>
    
                <div className="card w-80 bg-white  rounded-lg shadow-md border border-borderColor">
                    <div className="card-header flex items-center space-x-4 mb-4">
                        <img src={iconRevision} alt="icon-revision" className="icon w-12 h-12 ml-10" />
                        <h3 className="text-xl font-semibold ">Federal Drug Crimes</h3>
                    </div>
                    <div className="card-body text-gray-700 text-left m-7">
                        <p>- The best products start with Figma</p>
                        <p>- Design with real data</p>
                        <p>- Lightning fast prototyping</p>
                        <p>- Fastest way to organize</p>
                        <p>- Work at the speed of thought.</p>
                    </div>
                    <div className="card-button mt-4 text-left m-7">
                        <button className="text-textColorButton hover:underline text-left">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    ); 
}

export default PracticeAdviceSection;