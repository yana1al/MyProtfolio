import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5"
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-4">
        Hello, I'm Alima Sharma, currently from the vibrant SF Bay Area. I'm joyfully navigating the journey of motherhood with my 6-month-old daughter, Yana, and caring for our two furry companions, PomPom and Polly. My curiosity fuels my passion for exploring new realms of knowledge and experiences. Currently, I'm immersing myself in the world of coding and software engineering, eager to master its intricacies. I'm open to collaborating on innovative projects that challenge and inspire growth in my role as a Software Engineer. You can connect with me on LinkedIn to explore potential opportunities or simply to share insights.
      </p>
      <ul className="mt-4">
        <li>LinkedIn: <a href="your-linkedin-url" className="text-blue-500">Connect with me</a></li>
      </ul>
    </motion.div>
  );
};

export default AboutMe;
