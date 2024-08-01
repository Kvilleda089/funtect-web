import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-10 pb-5">
        <div className="max-w-6xl mx-auto px-4">
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
