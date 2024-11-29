import { Box,Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../../styles/FooterStyle.css";
import React from 'react';
 const  Footer = () =>{
  return (
  <>
  <Box sx={{textAlign:"center",bgcolor:"#1A1A19",color:"white",p:3}}>
    <Box sx={{my:3
    ,"& svg":{fontSize:"60px",cursor:"pointer",mr:2},
    "& svg:hover":
    {color:"yellow",
      transform:'translateX(5px)',
      transition:"all 400ms"

    }
  
  }}>
<InstagramIcon/>
<XIcon/>
<GitHubIcon/>
      </Box>
    <Typography variant="h5"
sx={{"@media (max-width:600px ":{fontSize:"1rem"},fontWeight:"700px"}}>
All Rights Reserved &copy; Malaika Tanveer
    </Typography>
  </Box>
  
  
  </>
    
  );
}

export default Footer
