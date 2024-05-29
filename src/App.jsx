import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import TalkBox from './components/TalkBox';
import Skills from './components/Skills';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/myWork" element={<MyWork />} />
        <Route path="/talkBox" element={<TalkBox />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
};

export default App;
