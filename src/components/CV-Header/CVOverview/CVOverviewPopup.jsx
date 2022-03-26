import React from 'react'
import SectionPopup from '../../UI/SectionPopup'

const CVOverviewPopup = ({visible, setVisible}) => {
  return (
    <SectionPopup visible={visible} setVisible={value => setVisible(value)}>CVOverviewPopup</SectionPopup>
  )
}

export default CVOverviewPopup