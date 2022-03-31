import React, { useState, useRef } from 'react';
import './styles/index.scss';
import CV from './components/CV';
import CVOptions from './components/CVOptions';
import defaultImg from './images/default-image.svg';

function App() {
  const componentRef = useRef();

  // Sections

  const [experience, setExperience] = useState(true);
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(true);
  const [award, setAward] = useState(true);
  const [reference, setReference] = useState(true);

  const sections = { experience, education, skills, award, reference };
  const setSections = { setEducation, setExperience, setSkills, setAward, setReference }

  // Content

  // image
  const [image, setImage] = useState(defaultImg);

  // overview
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profession, setProfession] = useState('');
  const [about, setAbout] = useState('');
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');

  // contact
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postZip, setPostZip] = useState('');
  const [country, setCountry] = useState('');

  // education
  const [cvEducation, setCvEducation] = useState([]);

  // skills
  const [cvSkills, setCvSkills] = useState([]);

  // experience
  const [experienceList, setExperienceList] = useState([]);

  // award
  const [awardTitle, setAwardTitle] = useState('');
  const [awardCorp, setAwardCorp] = useState('');
  const [aboutAward, setAboutAward] = useState('');

  // reference
  const [references, setReferences] = useState([]);

  const cv = {
    image,
    overview: { firstName, lastName, profession, about, facebook, linkedin },
    contact: { phone, email, adress, city, region, postZip, country },
    education: cvEducation,
    skills: cvSkills,
    experienceList,
    award: { award: awardTitle, corp: awardCorp, about: aboutAward },
    references,
  };

  const setCv = {
    setImage,
    setOverview: { setFirstName, setLastName, setProfession, setAbout, setFacebook, setLinkedin },
    setContact: { setPhone, setEmail, setAdress, setCity, setRegion, setPostZip, setCountry },
    setEducation: setCvEducation,
    setSkills: setCvSkills,
    setExperienceList,
    setAward: { setAward: setAwardTitle, setCorp: setAwardCorp, setAbout: setAboutAward },
    setReferences
  }

  const reset = () => {
    setImage(defaultImg)

    setFirstName('');
    setLastName('');
    setProfession('');
    setAbout('');
    setFacebook('');
    setLinkedin('');

    setPhone('');
    setEmail('');
    setAdress('');
    setCity('');
    setRegion('');
    setPostZip('');
    setCountry('');

    setCvEducation([]);

    setCvSkills([]);

    setExperienceList([]);

    setAwardTitle('');
    setAwardCorp('');
    setAboutAward('');

    setReferences([]);
  }

  return (
    <div className="App">
      <h1>CV</h1>
      <div className="cv__container">
        <CV setCv={setCv} cv={cv} sections={sections} ref={componentRef}/>
        <CVOptions componentRef={componentRef} reset={reset} sections={sections} setSections={setSections} />
        
      </div>
    </div>
  );
}

export default App;
