import React from 'react';
import { Grid, Paper, Avatar, TextField, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { typography } from '@material-ui/system';
import { useForm } from 'react-hook-form';

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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Login = () => {
    const { register, handleSubmit} = useForm(
        {mode: 'onBlur'}
    );
    const classes = useStyles();

    const paperStyle = {padding : 30, height:'70vh', width:300, margin:"20px auto"};
    const avatarStyle = {backgroundColor:"#1bbd7e"};
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                </Grid>
                <form className={classes.form} noValidate onSubmit={handleSubmit((data)=> alert(JSON.stringify(data)))}>
                    <TextField {...register('username', { required: true })} type="text" name="username" label="Username" placeholder="Enter Username" fullWidth required/>
                    <TextField {...register('password', { required: true })} label="Password" name="password" placeholder="Enter Password" type="password" fullWidth required/>
                    <FormControlLabel
                        control={
                        <Checkbox
                        {...register('rememberme')}
                            name="rememberme"
                            color="primary"
                            defaultValue={false}
                        />
                        }
                        label="Remember me"
                    />

                    <Button type="submit" variant="contained" color="primary" className={classes.submit} fullWidth>
                        Login
                    </Button>
                    <typography>
                        <Link href="#">
                            Forgot password?
                        </Link>
                    </typography>
                    <typography fullWidth> Don't have an account?  
                        <Link href="#">
                            Sign up
                        </Link>
                    </typography>
                    </form>
            </Paper>
        </Grid>
    )
} 

export default Login;