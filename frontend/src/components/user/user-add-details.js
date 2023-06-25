/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid, 
  TextField,
  Link  
} from '@mui/material';
import UserService from '../../services/UserService';

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

const type = [
  {
    value: 'requestor',
    label: 'Requestor'
  },
  {
    value: 'approver',
    label: 'Approver'
  },
  {
    value: 'reviewer',
    label: 'Reviewer'
  }
];

const status = [
  {
    value: 'active',
    label: 'Active'
  },
  {
    value: 'inactive',
    label: 'inactive'
  },
];

export const UserAddDetails = (props) => {
  const [values, setValues] = useState({
    name:'Name',
    staffNo: 'Staff No',
    email: 'user@bharatpetroleum.in',
    contact: 'XXXXXXXXXX',
    type: '',
    status: '',
    department: '',


  });
  //const history = useHistory();


  const {staffNo} = useParams();


  const saveorUpdateUserDetails = (e) => {
    e.preventDefault();

    const user = {values}
    if(staffNo){

      UserService.updateUser(staffNo,user).then((response) => {
        //history.push("/users");
      }).catch(error => {
        console.log(error)
      })

    }else{
      UserService.addUsers(user).then((response) => {
        console.log(response.data)
        //history.push("/users");
      
      }).catch(error => {
        console.log(error)
      })

    }
    
    
  }

  useEffect(() => {
    UserService.getUserById(staffNo).then((response) => {
      values.name(response.data.name)
      values.department(response.data.department)
      values.email(response.data.email)
      values.status(response.data.status)
      values.type(response.data.type)
      values.contact(response.data.contact)


    }).catch(error => {
      console.log(error)
    })
  })




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
      <Box
          sx={{
            display: 'flex',
            p: 2
          }}
        >
          <Link href = "/viewUsers">
                            back
                        </Link>
        </Box>
        <CardHeader
          subheader="The information can be edited"
          title="Add User"
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
                label="Name"
                name="name"
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
                label="Staff No"
                name="staffNo"
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
                label="Email"
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
                label="Contact"
                name="contact"
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
                label="Department"
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

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Type"
                name="type"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.type}
                variant="outlined"
              >
                {type.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Status"
                name="status"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.status}
                variant="outlined"
              >
                {status.map((option) => (
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
          >
            Add
          </Button>
        </Box>

        
      </Card>
    </form>
  );
};
