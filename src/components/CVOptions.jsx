import React from 'react';
import OptionsBtn from './UI/OptionsBtn';
import ToggleSection from './UI/ToggleSection';

const CVOptions = ({sections, setSections}) => {
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
        <OptionsBtn text="Reset" />
        <OptionsBtn text="Print PDF" />
      </div>
    </div>
  )
}

export default CVOptions