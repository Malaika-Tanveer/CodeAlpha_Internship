import React from 'react'
import Layout from '../components/Layouts/Layout'
import { colors ,Box,Typography} from '@mui/material'

function About() {
  return (
    <>
      <Layout>
        <Box sx={{my:15,textAlign:"center",p:2
          ,"& h4":{
            fontWeight:"bold",
            my:2,
            fontSize:'2rem',
            fontStyle:"italic",
            fontFamily:"Lora"
          },
          "& p":
          {
            textAlign:'justify'
          },
          '@media (max-width:600px)':
          {
            mt:0,
            fontSize:"1.5rem",
            fontStyle:"italic",
            fontFamily:"Lora"
          }
        }}>
          <Typography variant='h4'>
            Welcome to The Savory Spoon
          </Typography>
          <p>

            The Savory Spoon Restaurant is a delightful dining destination known for its warm ambiance and eclectic menu, featuring both classic and contemporary dishes.
             Emphasizing fresh ingredients and vibrant flavors, the restaurant offers a variety of options, from hearty main courses to carefully crafted appetizers and desserts. </p>
 <br/>
             <p>
             Whether you're there for a casual meal or a celebratory gathering, The Savory Spoon promises an inviting atmosphere and friendly service, making it an ideal spot to enjoy a flavorful and memorable dining experience.
             The Savory Spoon’s commitment to exceptional service and its emphasis on locally-sourced ingredients make it a standout choice. Guests often praise not only the delicious food but also the cozy atmosphere and attention to detail. For those looking to unwind, the restaurant offers an impressive selection of wines and craft cocktails, perfectly complementing its flavorful dishes. Whether you're a local or a traveler, The Savory Spoon offers an experience that’s both heartwarming and satisfying, inviting guests to savor each bite and create memorable dining moments.

             </p>
            
          
        </Box>
      </Layout>


    </>
  )
}

export default About
