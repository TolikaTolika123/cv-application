import React, {useState} from 'react';
import './styles/index.scss';
import CV from './components/CV';
import CVOptions from './components/CVOptions';

function App() {
  const [experience, setExperience] = useState(true);
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(true);
  const [award, setAward] = useState(true);
  const [reference, setReference] = useState(true);

  const sections = {experience, education, skills, award, reference};
  const setSections = {setEducation, setExperience, setSkills, setAward, setReference}
  return (
    <div className="App">
      <h1>CV</h1>
      <div className="cv__container">
        <CV sections={sections}/>
        <CVOptions sections={sections} setSections={setSections}/>
      </div>
    </div>
  );
}

export default App;
