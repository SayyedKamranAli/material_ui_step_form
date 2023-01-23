import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button } from '@mui/material';

export default function AddressForm() {

    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        address:'',
        mobile: "",
        saveAddress:'',
      };

      const [values, setValues] = React.useState(initialValues);
      console.log('values', values)

      const handleInputChange = (e) => {
        const { name, value,checked } = e.target;
        console.log('checked',value, checked)
        setValues({ ...values, [name]: value , checked});
      };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstname"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={values.firstname}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastname"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={values.lastname}
            onChange={handleInputChange}
          />
        </Grid>
       
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="shipping email"
            variant="standard"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobile"
            name="mobile"
            label="Contact Number"
            fullWidth
            autoComplete="shipping mobile"
            variant="standard"
            value={values.mobile}
            onChange={handleInputChange}
            type='number'
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address Line"
            fullWidth
            autoComplete="shipping address"
            variant="standard"
            value={values.address}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress"  value='Java'
            onChange={handleInputChange} />}
            label="Use this address for payment details"
          />
          {/* <button onClick={window.print()}>Print this page</button> */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
               
                  <Button onClick='' sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                

                <Button
                  variant="contained"
                  onClick=''
                  sx={{ mt: 3, ml: 1 }}
                >
                  Next
                </Button>
              </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}