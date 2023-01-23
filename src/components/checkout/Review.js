import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Box, Button, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];


// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

export default function Review() {
  const data = useSelector((state) => state.step.fields);
  const paymentData = useSelector((state) => state.step1.datas);
  const back = useNavigate();
  const next = useNavigate();
  const handleClick = () => {
    back("/paymentform");
  };
  const nextClick = () => {
   
      next("/checkout");
    };
  return (
    <React.Fragment>
  
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Grid container>
         
             <React.Fragment >
             <Typography gutterBottom>First Name : {data.firstname}</Typography>
             <Typography gutterBottom>Last Name : {data.lastname}</Typography>
             <Typography gutterBottom>Email : {data.email}</Typography>
             <Typography gutterBottom>Contact : {data.mobile}</Typography>
             <Typography gutterBottom>Address : {data.address}</Typography>
             {data.city}{data.state} {data.zip}{data.country}
            
           </React.Fragment>
         
         </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
          <Typography>Card Type : {paymentData.cardtype}</Typography>
             <Typography>Card Holder : {paymentData.cardholder}</Typography>
             <Typography>Card number : {paymentData.cardnumber}</Typography>
             <Typography>Expiry date : {paymentData.cardexpird}</Typography>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
               
          <Button
             type='submit'
               
               onClick={handleClick}
               sx={{ mt: 3, ml: 1 }}
             >
               Back
             </Button>

             <Button
             type='submit'
               variant="contained"
               onClick={nextClick}
               sx={{ mt: 3, ml: 1 }}
             >
               Next
             </Button>
           </Box>
        </Grid>
      </Grid>
      </Paper>
      </Container>
    </React.Fragment>
  );
}