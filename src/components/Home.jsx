import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Alima Sharma's Portfolio</h1>
        <p className="text-xl mb-8">Exploring the realms of coding and creativity.</p>
        <img 
        //   src="your-picture-url.jpg" 
          alt="Alima Sharma" 
          className="w-48 h-48 rounded-full mx-auto mb-8"
        />
        <div>
          <a href="#about" className="text-blue-500 hover:underline mx-2">About Me</a>
          <a href="#work" className="text-blue-500 hover:underline mx-2">My Work</a>
          <a href="#contact" className="text-blue-500 hover:underline mx-2">Connect</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
