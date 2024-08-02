import React from 'react';
import iconFacebook from '../img/icon-facebook.png';
import iconInstagram from '../img/instagram.png';
import iconTwitter from '../img/icon-twitter.png';
import iconYoute from '../img/icon-youtbe.png';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-10 pb-5">

        <div className="container-consultation w-full p-6 flex justify-between items-center">
          <div className="container-information flex-1">
            <div className="text-left pt-10 pb-10">
              <h1 className="text-3xl font-bold pt-10 py-10 ml-48">Litigade</h1>
            </div>
          </div>

          <div className="flex-shrink-0 flex space-x-2 mr-80" >
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center p-1 focus:outline-none">
              <img src={iconFacebook} className="w-full h-full " alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center p-1  focus:outline-none">
              <img src={iconInstagram} className="w-full h-full" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center p-1  focus:outline-none">
              <img src={iconTwitter} className="w-full h-full" alt="Twitter" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center p-1  focus:outline-none">
              <img src={iconYoute} className="w-full h-full" alt="YouTube" />
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[100%] border-t border-gray-400 opacity-2 py-10"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between">

            <div className="w-full sm:w-1/3 lg:w-1/5 mb-5 text-left">
              <h2 className="font-bold text-xl mb-2">Company Info</h2>
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline text-left">About Us</a></li>
                <li><a href="/" className="hover:underline">Carrier</a></li>
                <li><a href="/" className="hover:underline">We are hiring</a></li>
                <li><a href="/" className="hover:underline">Blog</a></li>
              </ul>
            </div>


            <div className="w-full sm:w-1/3 lg:w-1/5 mb-5  text-left">
              <h2 className="font-bold text-xl mb-2">Legal</h2>
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline">About Us</a></li>
                <li><a href="/" className="hover:underline">Carrier</a></li>
                <li><a href="/" className="hover:underline">We are hiring</a></li>
                <li><a href="/" className="hover:underline">Blog</a></li>
              </ul>
            </div>


            <div className="w-full sm:w-1/3 lg:w-1/5 mb-5  text-left">
              <h2 className="font-bold text-xl mb-2">Features</h2>
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline">Business Marketing</a></li>
                <li><a href="/" className="hover:underline">User Analytic</a></li>
                <li><a href="/" className="hover:underline">Live Chat</a></li>
                <li><a href="/" className="hover:underline">Unlimited Support</a></li>
              </ul>
            </div>


            <div className="w-full sm:w-1/3 lg:w-1/5 mb-5  text-left">
              <h2 className="font-bold text-xl mb-2">Resources</h2>
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline">iOS & Android</a></li>
                <li><a href="/" className="hover:underline">Watch a Demo</a></li>
                <li><a href="/" className="hover:underline">Customers</a></li>
                <li><a href="/" className="hover:underline">API</a></li>
              </ul>
            </div>


            <div className="w-full sm:w-1/3 lg:w-1/5 mb-5">
              <h2 className="font-bold text-xl mb-2">Get In Touch</h2>
              <form className='flex flex-col lg:flex-row '>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full lg:flex-grow p-2  text-gray-800 h-full"
                />
                <button type="submit" className="w-full lg:w-auto p-2 bg-buttonSuscribe hover:bg-yellow-600 text-white h-full">
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-gray-400 text-left">Lorem ipsum dolor amet</p>
            </div>
          </div>


          <div className="flex justify-center space-x-4 mt-5">
            <a href="/" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="/" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="/" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="/" className="hover:text-gray-400"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </footer>
      <div className="text-left w-full bg-footer">
        <div className="w-full">
          <h1 className="text-left ml-60 text-1xl pt-5 py-5 text-white font-bold">Made With Love By Figmaland All Right Reserved</h1>
        </div>
      </div>
    </>
  );
};


export default Footer;
