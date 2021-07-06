import React from 'react';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import { green } from '@material-ui/core/colors';
import fileService from "../../services/fileService";
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';


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
  conditional: {
    marginTop: theme.spacing(2),
  },
  largeIcon: {
    width: 45,
    height: 45,
  },
}));

export default function AddProduct() {
  const classes = useStyles();
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const types = ['image/png','image/jpeg', 'image/jpg', 'image/tiff'];
  const [files, setFiles] = useState(null);
  const [fileError, setFileError] = useState(null);

  const changeImageHandler = (e) => {
    let selected = e.target.files[0];
    //console.log(selected);
    if(selected && types.includes(selected.type)){
      setFiles(selected);
      setFileError('');
    }else{
      setFiles(null);
      setFileError("Please select image files only (png / jpeg / tiff)");
    }
  };

  const notify = () => toast.success("New product added!");
  const notifyFailed = () => toast.warning("Failed!");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
          <AddCircleIcon color="primary" className={classes.largeIcon}/>
        
        <Typography component="h1" variant="h5">
          Add an Art Piece
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(async (formData)=> {
    
              setSubmitting(true);
            //alert(JSON.stringify(formData));
            const fileData = await fileService.uploadImage(files);
            //console.log(fileData.data.secure_url);
            //console.log(fileData.data);
            if(fileData.status <= 300)
              {
                const imageurls = [fileData.data.secure_url];
                const response = await fetch("http://localhost:4000/products",{
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    Product: formData.name,
                    Catagory: formData.catagory,
                    Artist: formData.artistname,
                    Price: Number(formData.price),
                    isUnique: true,
                    Description: formData.description,
                    Dimension: formData.width+" W x "+formData.length+" L x"+formData.depth +" D",
                    Subject: formData.subject,
                    Style: formData.style,
                    Material: formData.Material,
                    images : imageurls,
                  }),
                });
              
              const data = await response.json();
              //alert(JSON.stringify((data)));
              notify();
            }else{
              notifyFailed();
            }
            setSubmitting(false);
            
          })}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                {...register("name", { required: true, maxLength: 200})}
                name="name"
                variant="outlined"
                fullWidth
                id="name"
                label="Product Title"
                autoFocus
              />
              {errors.name?.type === 'required' && "* Add a Title to your Art"}
              {errors.name && errors.name.type === "maxLength" && <span>* Maximum allowed length exceeded(200)</span> }
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="artistname"
                {...register("artistname", { required: true, maxLength: 20, pattern: /^[A-Za-z0-9 ]+$/ })}
                name="artistname"
                variant="outlined"
                fullWidth
                id="artistname"
                label="Artist Name"
              />
              {errors.artistname?.type === 'required' && "* Artist name is required"}
              {errors.artistname && errors.artistname.type === "maxLength" && <span>* Maximum allowed length exceeded(20)</span> }
              {errors.artistname && errors.artistname.type === "pattern" && <span>* Artist Name can only contain alphanumeric characters and space</span> }
            </Grid>
            <Grid xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="catagorylabel">&nbsp;&nbsp;Catagory</InputLabel>
                <Select
                  {...register("catagory", { required: true})}
                  labelId="catagory"
                  id="catagory"
                  name="catagory"
                  variant="outlined"
                  label="Catagory"
                  fullWidth
                >
                  <MenuItem value={"Painting"}>Painting</MenuItem>
                  <MenuItem value={"Drawing"}>Drawing</MenuItem>
                </Select>
                {errors.style?.type === 'required' && <span>* Add a Catagory to your Art piece</span>}
              </FormControl>
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="price"
                {...register("price", { required: true,  maxLength: 6, pattern: /^[0-9.]+$/ })}
                name="price"
                variant="outlined"
                fullWidth
                type="number"
                InputProps={{
                  endAdornment: <InputAdornment position="end">৳</InputAdornment>,
                }}
                id="price"
                label="Asking Price"
              />
              {errors.price?.type === 'required' && "* Adding price is required"}
              {errors.price && errors.price.type === "maxLength" && <span>* Maximum allowed digit exceeded(6)</span> }
              {errors.price && errors.price.type === "pattern" && <span>* This field can only contain Numeric characters</span> }
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                autoComplete="description"
                {...register("description", { required: true, maxLength: 1000 })}
                name="description"
                variant="outlined"
                fullWidth
                id="description"
                label="Description"
                rows={3}
              />
              {errors.description?.type === 'required' && "* Add a description of your Art"}
              {errors.description && errors.description.type === "maxLength" && <span>* Maximum allowed length exceeded(1000)</span> }
            </Grid>
            <Grid xs={12} sm={4}>
              <FormControl className={classes.formControl}>
                <InputLabel id="stylelabel">&nbsp;&nbsp;Style</InputLabel>
                <Select
                  {...register("style", { required: true})}
                  labelId="style"
                  id="style"
                  name="style"
                  variant="outlined"
                  label="Style"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Fine Art"}>Fine Art</MenuItem>
                  <MenuItem value={"Abstract"}>Abstract</MenuItem>
                  <MenuItem value={"Modern"}>Modern</MenuItem>
                  <MenuItem value={"Street Art"}>Street Art</MenuItem>
                  <MenuItem value={"Pop Art"}>Pop Art</MenuItem>
                </Select>
                {errors.style?.type === 'required' && <span>* Add a style tag to your Art piece</span>}
              </FormControl>
            </Grid>
            <Grid xs={12} sm={4}>
              <FormControl className={classes.formControl}>
                <InputLabel id="subjectlabel">&nbsp;&nbsp;Subject</InputLabel>
                <Select
                  {...register("subject", { required: true})}
                  labelId="subject"
                  id="subject"
                  name="subject"
                  variant="outlined"
                  label="Subject"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Portrait"}>Portrait</MenuItem>
                  <MenuItem value={"Landscape"}>Landscape</MenuItem>
                  <MenuItem value={"Still Life"}>Still Life</MenuItem>
                  <MenuItem value={"Nature"}>Nature</MenuItem>
                  <MenuItem value={"Beach"}>Beach</MenuItem>
                </Select>
                {errors.subject?.type === 'required' && <span>* Add a Subject tag to your Art piece</span>}
              </FormControl>
            </Grid>
            <Grid xs={12} sm={4}>
              <FormControl className={classes.formControl}>
                <InputLabel id="mediumlabel">&nbsp;&nbsp;Medium</InputLabel>
                <Select
                  {...register("medium", { required: true})}
                  labelId="medium"
                  id="medium"
                  name="medium"
                  variant="outlined"
                  label="Medium"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Oil"}>Oil</MenuItem>
                  <MenuItem value={"Watercolor"}>Watercolor</MenuItem>
                  <MenuItem value={"Acrylic"}>Acrylic</MenuItem>
                  <MenuItem value={"Airbrush"}>Airbrush</MenuItem>
                  <MenuItem value={"Digital"}>Digital</MenuItem>
                </Select>
                {errors.medium?.type === 'required' && <span>* Add the medium of your Art piece</span>}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h5" variant="h6">
                Enter dimensions
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="width"
                {...register("width", { required: false, maxLength: 5, pattern: /^[0-9.]+$/ })}
                name="width"
                variant="outlined"
                fullWidth
                id="width"
                label="Width"
                InputProps={{
                  endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                }}
              />
              {errors.width && errors.width.type === "maxLength" && <span>* Maximum allowed length exceeded(5)</span> }
              {errors.width && errors.width.type === "pattern" && <span>* This field can only contain Numeric characters</span> }
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="length"
                {...register("length", { required: false, maxLength: 5, pattern: /^[0-9.]+$/ })}
                name="length"
                variant="outlined"
                fullWidth
                id="length"
                label="Length"
                InputProps={{
                  endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                }}
              />
              {errors.length && errors.length.type === "maxLength" && <span>* Maximum allowed length exceeded(5)</span> }
              {errors.length && errors.length.type === "pattern" && <span>* This field can only contain Numeric characters</span> }
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="depth"
                {...register("depth", { required: false, maxLength: 5, pattern: /^[0-9.]+$/ })}
                name="depth"
                variant="outlined"
                fullWidth
                id="depth"
                label="Depth"
                InputProps={{
                  endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                }}
              />
              {errors.depth && errors.depth.type === "maxLength" && <span>* Maximum allowed length exceeded(5)</span> }
              {errors.depth && errors.depth.type === "pattern" && <span>* This field can only contain Numeric characters</span> }
            </Grid>
            <Grid item xs={12}>
              <Typography component="h5" variant="h6">
                Add photo(s)
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <input type="file" onChange={changeImageHandler}/>
              { fileError && <div className="fileerror">{fileError}</div>}
              { files && <div >{files.name}</div>}
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={submitting}
          >
            Post
          </Button>
          <ToastContainer
            position="top-center"
            autoClose={8000}
            transition="bounce"
            draggable
          />
        </form>
      </div>
    </Container>
  );
}