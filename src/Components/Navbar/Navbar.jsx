import React from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { Link, Shop, ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/gallery.png"
import { MenuList} from "./MenuList";
import useStyles from "./styles";
import "./Navbar.css";
import { NavLink} from "react-router-dom";
import { Button } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '@material-ui/core/Avatar';

const Navbar = () => {
    const classes = useStyles();
    const menuList = MenuList.map(({url,title,index}) =>{
        return (
                <NavLink to={url} activeClassName="active" key={index}  style={{ textDecoration: 'none' }}>{title}&emsp;<div className={classes.grow} /></NavLink>
        );
    });


    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Art Gallery" height="25px" className={classes.image}/>
                        Art Gallery
                    </Typography>
                    <Typography variant="inherit" className={classes.title} color="inherit">
                            {menuList}
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                        <a className="btn btn-primary rounded-3 btn-light" href="/signup" role="button">Sign Up</a>
                        <a className="btn btn-primary btn-light" href="/signin" role="button">Sign In</a>
                        <a className="btn btn-primary btn-light" href="/addprod" role="button">Add Product</a>
                        <a className="btn btn-primary btn-light" href="/admin/dashboard" role="button">Admin Dashboard</a>
                        <a className="btn btn-primary btn-light" href="/curator/dashboard" role="button">Curator Dashboard</a>
                        
                    </div>
                    <div className={classes.button}>
                        <IconButton   href={localStorage.getItem("role")=="artist"? "/artist/account": "/user/account"} aria-label="User Account" color="inherit">
                            <Avatar>U</Avatar>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

/*const menuList = MenuList.map(({url,title,index}) =>{
        return (
            <li key={index}>
                <NavLink to={url} activeClassName="active">{title}</NavLink>
            </li>
        );
    });
}*/

export default Navbar;

{/* <ul className="menu-list" color="inherit">
                        <Typography variant="inherit" className={classes.title} color="inherit">
                            {menuList}
                        </Typography>
                    </ul> */}