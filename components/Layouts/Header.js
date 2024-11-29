import React ,{useState} from 'react'
import {AppBar, Box, Drawer, IconButton, Toolbar, Typography ,Divider
} from '@mui/material'
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { Link,NavLink } from 'react-router-dom';
import "../../styles/HeaderStyles.css";
import MenuBookIcon from '@mui/icons-material/MenuBook';


function Header() {


  const [mobileOpen,setMobileOpen]=useState(false)

  const handleDrawerToggle=()=>
  {
    setMobileOpen(!mobileOpen);
  }

  const drawer =(
    <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>
 <Typography color={'Amber'}
  variant='h5'
  component="div"
  sx={{flexGrow:1 ,my:2}}
  >
  <RamenDiningIcon/>
  The Savory Spoon
  </Typography>
  <Divider/>
  <ul className='mobile-navigation'>

    <li>

      <NavLink className='active' to={"/"}>HOME</NavLink>
    </li>


    <li>

<NavLink className='active' to={"/about"}>ABOUT</NavLink>
</li>
<li>

<NavLink className='active' to={"/menu"}>MENU</NavLink>
</li>


<li>

<NavLink  className='active' to={"/contact"}>CONTACT</NavLink>
</li>

  </ul>


  
    </Box>
  )

  return (
  <Box>
<AppBar component={'nav'} sx={{bgcolor:"black"}}>
  <Toolbar>
    <IconButton color="inherit" aria-label='open drawer'
    edge="start"
    onClick={handleDrawerToggle}
    sx={{mr:2,dispaly: {sm:"none"},}}>
    <MenuBookIcon/>
    </IconButton>
  <Typography color={'Amber'}
  variant='h5'
  component="div"
  sx={{flexGrow:1}}
  >
  <RamenDiningIcon/>
  The Savory Spoon
  </Typography>
  <Box sx={{display :{xs:'none' ,sm:"block"}}}>
  <ul className='navigation_menu'>

    <li>

      <NavLink  activeClassName='active' to={"/"}>HOME</NavLink>
    </li>


    <li>

<NavLink className='active' to={"/about"}>ABOUT</NavLink>
</li>
<li>

<NavLink  className='active'to={"/menu"}>MENU</NavLink>
</li>


<li>

<NavLink  className='active'to={"/contact"}>CONTACT</NavLink>
</li>

  </ul>


  </Box>
  </Toolbar>
</AppBar>
<Box component='nav'>
<Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
sx={{display:{xs:"block",sm:"none"}, "& .MuiDrawer-paper":{boxSizing:'border-box',width:"200px"}, }}
>
{drawer}
</Drawer>

</Box>
<Box >
<Toolbar/>
</Box>

  </Box>
  )
}

export default Header
