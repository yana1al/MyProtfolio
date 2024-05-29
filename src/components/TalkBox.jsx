import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TalkBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="p-5"
    >
      <h2 className="text-3xl font-bold">MessageBoard</h2>
      <div className="mt-4">
        {messages.map((msg, index) => (
          <p key={index} className="bg-gray-200 p-2 rounded mb-2">{msg}</p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded">Send</button>
    </motion.div>
  );
};

export default TalkBox;
