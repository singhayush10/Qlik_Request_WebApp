/* eslint-disable no-unused-vars */

import { Box, Container, Grid, Typography } from '@mui/material';

import { RequestCreateDetails } from '../../components/request/request-create-details';


const RequestForm = () => (
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
            <RequestCreateDetails/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);


export default RequestForm;
