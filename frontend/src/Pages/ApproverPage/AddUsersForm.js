/* eslint-disable no-unused-vars */

import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfileDetails } from '../../components/account/account-profile-details';


import { UserAddDetails } from '../../components/user/user-add-details';


const AddUserForm = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
       
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <UserAddDetails/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);


export default AddUserForm;
