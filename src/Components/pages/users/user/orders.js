import React,{ useState, useEffect} from 'react';
import Orders from '../../../Orders/Orders.js';
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '100%',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      alignItems: 'center',
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
    button: {
      margin: theme.spacing(1),
    },
  }));

const User_Orders = () => {
    const [orders, setOrders] = useState([]);
    const [ordersFound, setOrdersFound] = useState(false);
    const history = useHistory();
    const classes = useStyles();


    function handleLogout(){
        localStorage.removeItem('userid');
        localStorage.removeItem('token');
        localStorage.removeItem('isArtist');
        localStorage.removeItem('role');
        history.push("/signin");
      }
    
    const ListStyle = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
    };

    const getOrders = () => {
        //alert("ekhane");
        
        Axios({
            method: "GET",
            withCredentials: true,
            url:`http://localhost:4000/orders/userID/${localStorage.getItem("userid")}`     //this is API url
        }).then((res)=>{
            //console.log(res.data);
            //alert(JSON.stringify(res.data));
            if(res.data.message != "no orders found"){
                setOrdersFound(true);
            }
            const {data} = res;
            setOrders(data);
        })
    }
    //console.log(products);
    
    useEffect(()=>{
        getOrders();
    },[] );

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    return (
        <div>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AccountCircleIcon color='inherit'/>
                    </Avatar>

                    <Grid container spacing={2}>
                        <Grid item
                            container
                            spacing={2}
                            xs={3}
                        >
                            <List sx={ListStyle} component="nav" aria-label={localStorage.getItem("role")==="artist"? "artist navigation": "user navigation"}>
                                <ListItem button component="a" href={localStorage.getItem("role")==="artist"? "/artist/account": "/user/account"}>
                                    <ListItemIcon>
                                        <InfoIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Account Info" />
                                </ListItem>
                                <Divider orientation="vertical"/>
                                <Divider/>
                                <ListItem button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}  
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </Button>
                                </ListItem>
                                <Divider/>  
                            </List>
                        </Grid>
                        <Grid item xs={9}>
                        {ordersFound? 
                            <Orders orders={orders}/>
                        :
                            <Typography paragraph>
                                No orders by you yet!
                            </Typography>
                        }
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default User_Orders;