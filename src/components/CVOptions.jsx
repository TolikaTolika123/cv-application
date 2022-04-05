import React, { useContext } from 'react';
import OptionsBtn from './UI/OptionsBtn';
import ToggleSection from './UI/ToggleSection';
import ReactToPrint from 'react-to-print';
import defaultImg from '../images/default-image.svg';
import { CVContext } from '../context';


const CVOptions = ({sections, setSections, cvRef}) => {
  const {setCv} = useContext(CVContext);
  
  const reset = () => {
    setCv.setImage(defaultImg)

    setCv.setOverview.setFirstName('');
    setCv.setOverview.setLastName('');
    setCv.setOverview.setProfession('');
    setCv.setOverview.setAbout('');
    setCv.setOverview.setFacebook('');
    setCv.setOverview.setLinkedin('');

    setCv.setContact.setPhone('');
    setCv.setContact.setEmail('');
    setCv.setContact.setAdress('');
    setCv.setContact.setCity('');
    setCv.setContact.setRegion('');
    setCv.setContact.setPostZip('');
    setCv.setContact.setCountry('');

    setCv.setEducation([]);

    setCv.setSkills([]);

    setCv.setExperienceList([]);

    setCv.setAward.setAward('');
    setCv.setAward.setCorp('');
    setCv.setAward.setAbout('');

    setCv.setReferences([]);
  }
  return (
    <div className='cv__options'>
      <div className="cv__options-sections">
        <ToggleSection name='Education' setState={setSections.setEducation} state={sections.education}/>
        <ToggleSection name='Skills' setState={setSections.setSkills} state={sections.skills}/>
        <ToggleSection name='Experience' setState={setSections.setExperience} state={sections.experience}/>
        <ToggleSection name='Award' setState={setSections.setAward} state={sections.award}/>
        <ToggleSection name='Reference' setState={setSections.setReference} state={sections.reference}/>
      </div>
      <div className="cv__options-buttons">
        <OptionsBtn 
        text="Reset" 
        onClick={reset}
        />
        
        <ReactToPrint
        trigger={() => <OptionsBtn text="Print PDF" />}
        content={() => cvRef.current}
      />
      </div>
    </div>
  )
}

export default CVOptions