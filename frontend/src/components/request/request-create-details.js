import { useState } from 'react';
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

const refreshFrequency = [
  {
    value: '',
    label: ''
  },
  {
    value: '',
    label: ''
  },
  {
    value: '',
    label: ''
  }
];

export const RequestCreateDetails = (props) => {
  const [values, setValues] = useState({
    environment: 'Environment',
    applicationName: 'Application Name',
    requestDescription: 'user@bharatpetroleum.in',
    stream: '',
    refreshFrequency: '',
  });

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
          <Link href = "/request">
                            back
                        </Link>
        </Box>
        <CardHeader
          subheader="The information can be edited"
          title="New Request"
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
                label="Environment"
                name="environment"
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
                label="Application Name"
                name="applicationName"
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
                label="Request Description"
                name="description"
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
                label="Stream"
                name="stream"
                onChange={handleChange}
                type="number"
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
                label="Refresh Frequency"
                name="refreshFrequency"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.department}
                variant="outlined"
              >
                {refreshFrequency.map((option) => (
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
            Save details
          </Button>
        </Box>

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
            Send
          </Button>
        </Box>
        
      </Card>
    </form>
  );
};
