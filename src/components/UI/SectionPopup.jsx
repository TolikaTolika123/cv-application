import React from 'react'

const SectionPopup = ({ title, children, states, setStates, changedStates, setChangedStates }) => {
  const rootClasses = ['section__popup'];
  if (states.modal) {
    rootClasses.push('active')
  }

  function hidePopup(e) {
    e.stopPropagation();
    setStates.setModal(false);
  }

  function cancelChanges(e) {
    e.preventDefault();
    for (let state in changedStates) {
      setChangedStates[`set${firstLetterUppercase(state)}`](states[state])
    }
    hidePopup(e);
  }

  function saveChanges(e) {
    e.preventDefault();
    for (let state in states) {
      if (state !== 'modal') setStates[`set${firstLetterUppercase(state)}`](changedStates[state])
    }
    hidePopup(e);
  }

  function firstLetterUppercase(str) {
    str = str.split('');
    str[0] = str[0].toUpperCase();
    return str.join('');
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={hidePopup} // not working
    >
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
  )
}

export default SectionPopup