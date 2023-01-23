import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../../redux/steps/step.action";

export default function AddressForm() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    mobile: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  };
  const [values, setValues] = React.useState(initialValues);
  const [validation, setValidation] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    // password: "",
    // confirmPassword: "",
  });
  

  const next = useNavigate();
  const dispatch = useDispatch();

  const checkValidation = () => {
    let errors = { ...validation };
    let isValid = true;
    //first Name validation
    if (!values.firstname) {
      errors.firstname = "First name is required";
      isValid = false;
    } else {
      errors.firstname = "";
    }

    //last Name validation
    if (!values.lastname) {
      errors.lastname = "Last name is required";
      isValid = false;
    } else {
      errors.lastname = "";
    }

    // email validation
    // eslint-disable-next-line
    const emailCond = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!values.email.match(emailCond)) {
      errors.email = "Please enter valid email address";
      isValid = false;
    } else {
      errors.email = "";
    }

    //mobile number validation
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!values.mobile) {
      errors.mobile = "contact number no. is required";
      isValid = false;
    } else if (!values.mobile.match(re)) {
      
      errors.mobile = "contact number must be equal to 10 digit";
      isValid = false;
    } else {
      errors.mobile = "";
    }

    //   //password validation
    //   // const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    //   // const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    //   // const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    //   // const password = inputValues.password;
    //   // if (!password) {
    //   //   errors.password = "password is required";
    //   // } else if (password.length < 6) {
    //   //   errors.password = "Password must be longer than 6 characters";
    //   // } else if (password.length >= 20) {
    //   //   errors.password = "Password must shorter than 20 characters";
    //   // } else if (!password.match(cond1)) {
    //   //   errors.password = "Password must contain at least one lowercase";
    //   // } else if (!password.match(cond2)) {
    //   //   errors.password = "Password must contain at least one capital letter";
    //   // } else if (!password.match(cond3)) {
    //   //   errors.password = "Password must contain at least a number";
    //   // } else {
    //   //   errors.password = "";
    //   // }

    //   // //matchPassword validation
    //   // if (!inputValues.confirmPassword) {
    //   //   errors.confirmPassword = "Password confirmation is required";
    //   // } else if (inputValues.confirmPassword !== inputValues.Password) {
    //   //   errors.confirmPassword = "Password does not match confirmation password";
    //   // } else {
    //   //   errors.password = "";
    //   // }

    setValidation(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setValues({ ...values, [name]: value, checked });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const isValid = checkValidation();
    if (isValid) {
    dispatch(addData(values));
    next("/paymentform");
    }
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
          {validation.firstname && (
                  <p className="mb-0" style={{ color: "red",textAlign: "justify" }}>
                    {validation.firstname}
                  </p>
                )}
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
          {validation.lastname && (
                  <p className="mb-0" style={{ color: "red" ,textAlign: "justify" }}>
                    {validation.lastname}
                  </p>
                )}
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
          {validation.email && (
                  <p className="mb-0" style={{ color: "red" ,textAlign: "justify"}}>
                    {validation.email}
                  </p>
                )}
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
            type="number"
          />
          {validation.mobile && (
                  <p className="mb-0" style={{ color: "red" ,textAlign: "justify"}}>
                    {validation.mobile}
                  </p>
                )}
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
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={values.state}
            onChange={handleInputChange}
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
            value={values.zip}
            onChange={handleInputChange}
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
            value={values.country}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                value="Java"
                onChange={handleInputChange}
              />
            }
            label="Use this address for payment details"
          />
          {/* <button onClick={window.print()}>Print this page</button> */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="contained"
              onClick={handleClick}
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
