import React from 'react'

const SectionPopup = ({ title, children, states, setStates, changedStates, setChangedStates, modal, setModal }) => {
  const rootClasses = ['section__popup'];
  if (modal) {
    rootClasses.push('active');
    document.body.style.overflow = "hidden"
  }

  function hidePopup(e) {
    e.stopPropagation();
    setModal(false);
    document.body.style.overflow = "auto"
  }

  function cancelChanges(e) {
    e.preventDefault();
    for (let state in changedStates) {
      setChangedStates[`set${firstLetterUppercase(state)}`](structuredClone(states[state]))
    }
    hidePopup(e);
  }

  function saveChanges(e) {
    e.preventDefault();
    for (let state in changedStates) {
      setStates[`set${firstLetterUppercase(state)}`](structuredClone(changedStates[state]))
    }
    hidePopup(e);
  }

  function firstLetterUppercase(str) {
    str = str.split('');
    str[0] = str[0].toUpperCase();
    return str.join('');
  }

  return (
    <div className={rootClasses.join(' ')}>
      <div className="section__popup-wrapper">
        <div className='section__popup-content' onClick={e => e.stopPropagation()}>
          <h3 className="section__popup-title">{title}</h3>
          <form className="section__popup-form">
            {children}
            <div className="section__popup-buttons">
              <button className="section__popup-cancel" onClick={cancelChanges}>Cancel</button>
              <button className="section__popup-save" onClick={saveChanges}>Save</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SectionPopup