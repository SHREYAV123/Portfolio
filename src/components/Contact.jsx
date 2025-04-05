import React from 'react';
import { Email } from '@mui/icons-material';
import { GitHub, LinkedIn, Telegram } from '@mui/icons-material';


const Contact = () => {

  // const link=process.env.REACT_APP_FORMSPREE_URL

  return (
    <section className='contact' id='contact'>
      <div className="contact-text">
      <h2 className='text-5xl font-semibold leading-none text-center text-gray-500 reveal-up'>
  Get In <span className='text-teal-600'>Touch</span>
</h2>
<h4 className='mt-10 text-xl font-semibold reveal-up'>
  Let's Work Together
</h4>
<p className='mt-4 mb-8 text-xl leading-7 text-gray-500 reveal-up'>
  I'm always excited to connect! Whether you're brainstorming your next big idea, want to explore a collaboration, or simply feel like having a chat, I'd love to hear from you. Let's make something amazing together!
</p>


        <div className='mb-1 text-gray-400 contact-list'>
          <ul>
            <li className='mb-2.5  block reveal-up'>
              <Email sx={{ verticalAlign: 'middle', marginRight: '8px', color: '#78bdf8', fontSize:'20px'}}  />
              2k22.csaiml.2213531@gmail.com
            </li>
          </ul>
        </div>
        <div className='contact-icons reveal-up'>
      
   <a href="https://github.com/SHREYAV123" target="_blank" rel="noopener noreferrer"><GitHub sx={{ verticalAlign: 'middle', marginRight: '8px', color: '#6e8eae'}} /></a>

          
              
              <a href="https://www.linkedin.com/in/shreya-sahu-95771127a/" target="_blank" rel="noopener noreferrer"><LinkedIn sx={{ verticalAlign: 'middle', marginRight: '8px', color: '#1e57a5' }} /></a>

        </div>
        </div>
        <div className='mb-8 contact-form'>
  <form className="max-w-xl p-12 mx-auto shadow-2xl bg-gradient-to-b from-white to-gray-100 rounded-3xl dark:from-gray-800 dark:to-gray-900" action={import.meta.env.VITE_FORMSPREE_URL} method='POST' >
    {/* Username Input */}
    <label htmlFor="username" className="block mb-3 text-xl font-semibold text-gray-700 reveal-up dark:text-gray-300">Your Name</label>
    <div className="flex mb-8">
      <span className="inline-flex items-center px-6 text-xl text-gray-700 bg-gray-200 border border-gray-300 reveal-up border-e-0 rounded-s-3xl dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
        <svg className="text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
      </span>
      <input 
        type="text" name='name' 
        id="username" 
        className="flex-1 block w-full p-4 text-lg text-gray-900 border border-gray-300 rounded-none reveal-up rounded-e-3xl bg-gray-50 focus:ring-2 focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white" 
        placeholder="Bonnie Green" 
      />
    </div>

    {/* Email Input */}
    <label htmlFor="email-address-icon" className="block mb-3 text-xl font-semibold text-gray-700 reveal-up dark:text-gray-300">Your Email</label>
    <div className="relative mb-8">
      <div className="absolute inset-y-0 flex items-center pointer-events-none reveal-up start-0 ps-4">
        <svg className="text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 16">
          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
        </svg>
      </div>
      <input 
        type="email" name='email'
        id="email-address-icon" 
        className="block w-full p-4 text-lg text-gray-900 border border-gray-300 reveal-up bg-gray-50 rounded-3xl focus:ring-2 focus:ring-blue-300 ps-14 dark:bg-gray-800 dark:border-gray-600 dark:text-white" 
        placeholder="name@flowbite.com" 
      />
      
    </div>

    {/* Message Input */}
    <label htmlFor="message" className="block mb-3 text-xl font-semibold text-gray-700 reveal-up dark:text-gray-300">Your Message</label>
    <textarea type='text' name='message' 
      id="message" 
      rows="6" 
      className="block w-full p-4 text-lg text-gray-900 border border-gray-300 reveal-up bg-gray-50 rounded-3xl focus:ring-2 focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white" 
      placeholder="Leave a message..."
    />

    {/* Submit Button */}
    <button type="submit" className="w-full px-6 py-4 mt-8 text-lg font-bold text-white reveal-up bg-gradient-to-r from-teal-500 to-cyan-600 rounded-3xl hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:from-teal-600 dark:to-cyan-700">
      Send 
    </button>
  </form>
</div>



   
    </section>
  );
};

export default Contact;
