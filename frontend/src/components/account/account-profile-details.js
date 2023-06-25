/* eslint-disable no-unused-vars */
import { Component, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

import ProfileService from '../../services/ProfileService';


const department = [
  {
    value: 'aviation',
    label: 'Aviation'
  },
  {
    value: 'legal',
    label: 'Legal'
  },
  {
    value: 'refinery',
    label: 'Refinery'
  }
];



export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Firstname',
    lastName: 'Lastname',
    email: 'user@bharatpetroleum.in',
    phone: 'XXXXXXXXXX',

    country: 'India'
  });

  //connecting React with SpringBoot

  /*
  useEffect(() => {

    ProfileService.getProfiles().then((response) => {
      
      setValues(response.data)
      console.log(response.data);
    }).catch(error =>{
      console.log(error);
    })

  },[])
  */

  const saveDetails = (e) => {
    e.preventDefault();
    const profile ={values}
    ProfileService.createProfile(profile).then((response) => {
        console.log(response.data)
        //history.push("/profile");

    }).catch(error =>{
      console.log(error)
    })
  }


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  



  return (
    
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card elevation={4}>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                required
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select Department"
                name="department"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.department}
                variant="outlined"
              >
                {department.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick = {(e) => saveDetails(e)}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
