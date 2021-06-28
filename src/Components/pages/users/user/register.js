import React from 'react';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const { register, handleSubmit, control, formState: { errors }} = useForm();
  //const [submitting, setSubmitting] = useState<Boolean>(false);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(async (formData)=> {
          //setSubmitting(true);
          //alert(JSON.stringify(formData));
          

          const response = await fetch("http://localhost:4000/users",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              Name: formData.name,
              Email: formData.email,
              Address: formData.address,
              Password: formData.password,
              Location: formData.location,
              Username: formData.username,
            }),
          });
          
          const data = await response.json();
          alert(JSON.stringify((data)));

          //setSubmitting(false);

          })}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="name"
                {...register("name", { required: true, maxLength: 30, pattern: /^[A-Za-z ]+$/i })}
                name="name"
                variant="outlined"
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
              {errors.name?.type === 'required' && "* Name is required"}
              {errors.name && errors.name.type === "maxLength" && <span>* Maximum allowed length exceeded(30)</span> }
              {errors.name && errors.name.type === "pattern" && <span>* Name can only contain alphabets</span> }
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="username"
                {...register("username", { required: true, maxLength: 20, pattern: /^[A-Za-z0-9_]+$/ })}
                name="username"
                variant="outlined"
                fullWidth
                id="username"
                label="Username"
              />
              {errors.username?.type === 'required' && "* Username is required"}
              {errors.username && errors.username.type === "maxLength" && <span>* Maximum allowed length exceeded(20)</span> }
              {errors.username && errors.username.type === "pattern" && <span>* Username can only contain alphanumeric characters and underscore(_)</span> }
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                {...register("email", { required:true, maxLength: 40,pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              {errors.email?.type === 'required' && "* Email is required"}
              {errors.email && errors.email.type === "maxLength" && <span>* Maximum allowed length exceeded(40)</span> }
              {errors.email && errors.email.type === "pattern" && <span>* Invalid Email</span> }
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                {...register("password", { required: true, minLength:6 })}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {errors.password?.type === 'required' && "* Password is required"}
              {errors.password && errors.password.type === "minLength" && <span>* Minimum allowed password length is 6</span> }
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                autoComplete="address"
                {...register("address", { required: true, maxLength: 200 })}
                name="address"
                variant="outlined"
                fullWidth
                id="address"
                label="Address"
              />
              {errors.address?.type === 'required' && "* Address is required"}
              {errors.address && errors.address.type === "maxLength" && <span>* Maximum allowed length exceeded(200)</span> }
            </Grid>
            <Grid xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="locationlabel">&nbsp;&nbsp;Location</InputLabel>
                <Select
                  {...register("location", { required: true})}
                  labelId="location"
                  id="location"
                  name="location"
                  variant="outlined"
                  label="Location"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Dhaka"}>Dhaka</MenuItem>
                  <MenuItem value={"Khulna"}>Khulna</MenuItem>
                  <MenuItem value={"Rajshahi"}>Rajshahi</MenuItem>
                  <MenuItem value={"Barisal"}>Barisal</MenuItem>
                  <MenuItem value={"Sylhet"}>Sylhet</MenuItem>
                  <MenuItem value={"Chattogram"}>Chattogram</MenuItem>
                  <MenuItem value={"Faridpur"}>Faridpur</MenuItem>
                </Select>
                {errors.location?.type === 'required' && <span>* Location is required</span>}
              </FormControl>
            </Grid>
            
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

          >
            Sign Up
          </Button>
          <Grid container justify="flex-start">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}