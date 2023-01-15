import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate('/')}>About</div>
    
  )
}

export default About