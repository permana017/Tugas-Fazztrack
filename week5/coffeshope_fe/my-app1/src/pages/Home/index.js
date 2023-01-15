import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate('about')}>Home</div>
    
  )
}

export default Home