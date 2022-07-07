import React from 'react'
import CV from '../../assets/Resume.pdf'
import './header.css'
import EmailIcon from '@mui/icons-material/Email';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Download CV</a>
        <a href="#contact" className='btn btn-primary'><EmailIcon className='inline-icon'/> Say Hi!</a>
    </div>
  )
}

export default CTA