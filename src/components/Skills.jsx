import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJsSquare, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div className="skills-section p-8">
      <h2 className="text-center text-3xl mb-6">Skills</h2>
      <div className="flex justify-center space-x-8">
        <div className="skill">
          <FontAwesomeIcon icon={faReact} size="3x" />
          <p>React</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faNodeJs} size="3x" />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faJsSquare} size="3x" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faHtml5} size="3x" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faCss3Alt} size="3x" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faDatabase} size="3x" />
          <p>Databases</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
