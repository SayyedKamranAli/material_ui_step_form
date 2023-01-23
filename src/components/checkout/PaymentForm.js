import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { paymentData } from "../../redux/payment/step1.action";

export default function PaymentForm() {
  const initialValues = {
    cardtype: "",
    cardholder: "",
    cardnumber: "",
    cardexpird: "",
  };
  const [datas, setDatas] = React.useState(initialValues);

  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setDatas({ ...datas, [name]: value, checked });
  };

    const back = useNavigate();
    const next = useNavigate();
    const handleClick = (event) => {
      event.preventDefault();
    
      back("/material_ui_step_form");
    };
    const nextClick = () => {
      dispatch(paymentData(datas));
        next("/material_ui_step_form/review");
      };
  return (
    <React.Fragment>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            name='cardholder'
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={datas.cardholder}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            name='cardnumber'
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={datas.cardnumber}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name='cardexpird'
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={datas.cardexpird}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name='cardtype'
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={datas.cardtype}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
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