import React from 'react'

const SectionPopup = ({ children, visible, setVisible }) => {
  const rootClasses = ['cv__section-popup'];
  if (visible) {
    rootClasses.push('active')
    setTimeout(hidePopup, 1000) //working
  }

  function hidePopup() {
    setVisible(false)
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={hidePopup} // not working
    >
      <div className="cv__section-popup-content">
        {children}
      </div>
    </div>
  )
}

export default SectionPopup