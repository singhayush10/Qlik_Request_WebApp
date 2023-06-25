/* eslint-disable no-unused-vars */
import { Button, Grid, Paper, TextField, Typography, Link, Divider,Box } from "@mui/material";
import React from "react";
import { Avatar } from '@mui/material';
import Logo from '/Users/ayush/Bpcl/Project/frontend/src/images/Logo.png'

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';




const Login =()=> {
    
    const paperStyle = {padding:20,height:'65vh',width: '22%', margin:'5.5% auto'}
    const ButtonStyle = {margin: '10% 0' }
    const TextStyle = {margin: '5% 0'}
    const AvatarStyle = {height: '120px', width:'95px'}
    const AvatarStyleSmall = {height: '47px',width: '35px'}
    return (

        
        <Box sx={{ flexGrow: 1 }}>
             <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Bharat Petroleum Corporation Limited
                </Typography>
                <Avatar style = {AvatarStyleSmall} variant='square' src = {Logo} alt = "Bpcl"/>
                </Toolbar>
            </AppBar>
            <Grid>
                
                <Paper elevation = {4} style = {paperStyle} className="Login">
                    <Grid align = "center">
                    <Avatar style = {AvatarStyle} variant = 'square' src = {Logo} alt = "Bpcl"/>
                    <h3>ACoE Request Tracking Login</h3>
                    </Grid>
                    <TextField style = {TextStyle} label = "Username" placeholder="Enter Username" fullWidth = "True" required /> 
                    <TextField label = "Password" placeholder="Enter Password" type = "password" fullWidth = "True" required/> 
         
                    <Button href="/homeApprover" type = "Submit" color = "secondary" fullWidth = "True" variant = "contained" style = {ButtonStyle} >Sign in</Button>
                    <Divider/>
                    <Typography style={TextStyle}>
                        <Link href = "#">
                            Forgot Password?
                        </Link>
                    </Typography>
                    
                </Paper> 
            </Grid>

            
        </Box>
        
    )
}

export default Login