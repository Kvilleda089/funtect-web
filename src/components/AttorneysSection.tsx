import React from "react";
import imgLayerCeo from '../img/layer & ceo.jpg';
import imgLayerCivil from '../img/layer-civil-law.jpg';
import imgCeo from '../img/ceo.jpg'
import iconFacebook from '../img/icon-facebook.png';
import iconInstagram from '../img/icon-instagram.png';
import iconTwitter from '../img/icon-twitter.png';

const AttorneysSection: React.FC = () =>{
    return (
        <div className="container-attorneys">
            <div className="information-attorneys my-20 text-center">
                <h1 className="text-4xl my-1.5">Meet Our Attorneys</h1>
                <p className="text-xl text-gray-500">Problems trying to resolve the conflict between</p>
                <p className="text-xl text-gray-500">the two major realms of Classical physics: Newtonian mechanics</p>
            </div>

            <div className="container-cards flex justify-center flex-wrap">
                <div className="card m-4 p-4 bg-white shadow-lg rounded-lg w-64">
                    <div className="card-img flex justify-center w-full h-40">
                        <img src={imgLayerCeo} className="w-full h-full object-cover rounded-t-lg" alt="" />
                    </div>
                    <div className="card-information text-center mt-4">
                        <h2 className="text-xl font-semibold">Ashley Fletcher</h2>
                        <p className="text-gray-500">LAWYER & CEO</p>
                    </div>
                    <div className="card-information-redes-sociales flex justify-center mt-4 space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center p-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
                            <img src={iconFacebook} className="w-full h-full" alt="Facebook" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center p-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
                            <img src={iconInstagram} className="w-full h-full" alt="Instagram" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center p-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
                            <img src={iconTwitter} className="w-full h-full" alt="Twitter" />
                        </a>
                    </div>
                </div>

                <div className="card m-4 p-4 bg-white shadow-lg rounded-lg w-64">
                    <div className="card-img flex justify-center w-full h-40">
                        <img src={imgCeo} className="w-full h-full object-cover rounded-t-lg" alt="" />
                    </div>
                    <div className="card-information text-center mt-4">
                        <h2 className="text-xl font-semibold">Rodney Straton</h2>
                        <p className="text-gray-500">CEO</p>
                    </div>
                    <div className="card-information-redes-sociales flex justify-center mt-4 space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center p-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
                            <img src={iconFacebook} className="w-full h-full" alt="Facebook" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center p-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
                            <img src={iconInstagram} className="w-full h-full" alt="Instagram" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center p-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
                            <img src={iconTwitter} className="w-full h-full" alt="Twitter" />
                        </a>
                    </div>
                </div>

                <div className="card m-4 p-4 bg-white shadow-lg rounded-lg w-64">
                    <div className="card-img flex justify-center w-full h-40">
                        <img src={imgLayerCivil} className="w-full h-full object-cover rounded-t-lg" alt="" />
                    </div>
                    <div className="card-information text-center mt-4">
                        <h2 className="text-xl font-semibold">Avie Beatron</h2>
                        <p className="text-gray-500">LAWYER CIVIL LAW</p>
                    </div>
                    <div className="card-information-redes-sociales flex justify-center mt-4 space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center p-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
                            <img src={iconFacebook} className="w-full h-full" alt="Facebook" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center p-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
                            <img src={iconInstagram} className="w-full h-full" alt="Instagram" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center p-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
                            <img src={iconTwitter} className="w-full h-full" alt="Twitter" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );   
}

export default AttorneysSection;