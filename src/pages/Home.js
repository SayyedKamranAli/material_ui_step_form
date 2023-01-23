import { Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import AddressForm from '../components/checkout/AddressForm';


function Home() {
  return (
    <div>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
        <AddressForm/>
        </Paper>
      </Container></div>
  )
}

export default Home