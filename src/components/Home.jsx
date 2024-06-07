import React, { useState, useEffect } from 'react';

const AnimatedText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayedText.length < text.length) {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }
    }, 100); // Adjust the delay between each letter appearance here

    return () => clearTimeout(timer);
  }, [displayedText, text]);

  return <>{displayedText}</>;
};

const CreativeText = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">
        <AnimatedText text="Welcome to Alima Sharma's Portfolio" />
      </h1>
      <p className="text-xl mb-8">
        <AnimatedText text="Exploring the realms of coding and creativity." />
      </p>
    </div>
  );
};

export default CreativeText;
