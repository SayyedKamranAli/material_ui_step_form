import { Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {
  
  function Copyright() {
    let next = useNavigate();
  const nextClick=()=>{
    next('/');
    
  }
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Button  onClick={nextClick} >Your Website</Button>
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  return (
    <div><Copyright/></div>
  )
}

export default Footer