import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box, Table, TableBody, TableCell,Paper, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
function Contact() {
  return (
  <>
  <Layout>
   <Box sx={{my:10,ml:10,"& h4":
    {
      fontWeight:"bold",mb:2,fontFamily:"Lora",fontStyle:"italic"
    }
   }}>
    <Typography variant='h4'>
CONTACT US
    </Typography>
    <p>
    We’d love to hear from you! Whether you have a question, need support, or simply want to say hello, don’t hesitate to reach out to us. Our team is dedicated to providing you with the best assistance possible, so feel free to contact us anytime. Just fill out the form below, and we’ll get back to you as soon as we can. Your feedback and inquiries are important to us, and we’re here to help make your experience with us as smooth and enjoyable as possible."
</p>
<br/>
<p>
Let me know if you need any further customization!
    </p>
   </Box>
   <Box sx={{m:3,width:"600px",ml:10,"@media (max-width:600px)":{width:"300px"}}}>
    <TableContainer component={Paper}>
<Table arial-label="contact table">
<TableHead>

  <TableRow>

    <TableCell  sx={{bgcolor:"black",color:"white",fontFamily:"Lora",fontWeight:"bold", fontSize:"24px"}} align='center'>
      Contact Details
    </TableCell>
  </TableRow>
</TableHead>
<TableBody>
  <TableRow>
    <TableCell>
 <ContactSupportIcon sx={{color:"red",pt:1}}/> 123456 
    </TableCell>

  </TableRow>
  <TableRow>
    
  <TableCell>
 <MailIcon sx={{color:"skyblue",pt:1}}/> abcd@gmail.com
    </TableCell>
  </TableRow>

  <TableRow>
    <TableCell>
      <CallIcon sx={{color:"green",pt:1}}/> 90875457
    </TableCell>
  </TableRow>
</TableBody>
</Table>
    </TableContainer>
   </Box>
  </Layout>
  </>
  )
}

export default Contact
