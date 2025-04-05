import React from 'react';
import { GitHub, LinkedIn, Telegram ,ArrowUpward} from '@mui/icons-material';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Footer Section */}
      <footer className="py-4 text-gray-200 border-t border-gray-500 bg-gradient-to-r from-gray-800 to-teal-700">
        <div className="container flex flex-col items-center justify-center px-8 mx-auto">

          {/* Developer Name with Gradient Text */}
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-gray-200">Shreya Sahu</h2>
          <p className="mt-1 text-sm">Web Developer | Crafting beautiful experiences with code ✨</p>

          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-4">
            <a href="https://github.com/SHREYAV123" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <GitHub fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/shreya-sahu-95771127a/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <LinkedIn fontSize="large" />
            </a>
           
          </div>

          {/* Copyright and Credit */}
          <p className="mt-4 text-xs text-gray-400">Developed with ❤️ by Shreya Sahu 😊 | &copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed p-4 text-white transition-transform transform bg-teal-500 shadow-lg bottom-8 right-8 hover:bg-teal-600 hover:scale-110 scroll-to-top"
      >
      <ArrowUpward fontSize="large" />
      </button>
    </>
  );
};

export default Footer;
