import React,{ useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from '@material-ui/core';
import authService from '../../services/authService';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    float: "left",
    marginRight: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


function ProductHeader( {name} ){
  const classes = useStyles();
  return (
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          {name[0]}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={name}
      subheader="September 14, 2016"
    />
  );
}

function ProductImage( {image} ){
  const classes = useStyles();
  return (
    <CardMedia
      className={classes.media}
      image={image}
      title="Paella dish"
    />
  );
}

function ProductDescription( {description, handleExpandClick, expanded, price, artist, ID, user, setUser, favColor, setFavColor
                            ,cartColor, setCartColor, cartCount, setCartCount} ){
  const classes = useStyles();

  //const s = 'Gray';
  if(typeof user.Favorites !== 'undefined'){
    if(user.Favorites.includes(ID)){
      setFavColor('red');
    }
    else {
      setFavColor('Gray');
    }
  }

  if(typeof user.Cart !== 'undefined'){
    if(user.Cart.includes(ID)){
      setCartColor('red');
    }
    else {
      setCartColor('Gray');
    }
  }

  async function favIconClickHandle(){
    if(typeof user.Favorites !== 'undefined'){
      if(!user.Favorites.includes(ID)){
          setFavColor('red');
          user.Favorites.push(ID);
          setUser(user);
        }
        else{
          setFavColor('Gray');
          user.Favorites = user.Favorites.filter( (prodId)=> {
            return prodId != ID;
          })
          setUser(user);
        }
        const response = await fetch(`http://localhost:4000/users/${localStorage.getItem('userid')}`,{
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": authService.getJWT(),
          },
          body: JSON.stringify({
            Name: user.name,
            Email: user.email,
            Address: user.address,
            Password: user.password,
            Location: user.location,
            Username: user.username,
            Favorites: user.Favorites,
          }),
        });
        const data = await response.json();
        console.log(data);
      }
      else{
        alert('You are not be logged in probably');
      }
    }

  async function cartIconHandleClick(){
    if(typeof user.Cart !== 'undefined'){
      if(!user.Cart.includes(ID)){
          setCartColor('red');
          user.Cart.push(ID);
          setUser(user);
          setCartCount(cartCount + 1);
        }
        else{
          setCartColor('Gray');
          user.Cart = user.Cart.filter( (prodId)=> {
            return prodId != ID;
          })
          setUser(user);
          setCartCount(cartCount - 1);
        }
        const response = await fetch(`http://localhost:4000/users/${localStorage.getItem('userid')}`,{
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": authService.getJWT(),
          },
          body: JSON.stringify({
            Name: user.name,
            Email: user.email,
            Address: user.address,
            Password: user.password,
            Location: user.location,
            Username: user.username,
            Favorites: user.Favorites,
            Cart: user.Cart,
          }),
        });
        const data = await response.json();
        console.log(data);
      }
      else{
        alert('You are not be logged in probably');
      }
    }
  
  return (
    <div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p>{price}$</p>
          <p>{artist}</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" 
                    style={{color: favColor}}
                    onClick={favIconClickHandle}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to cart"
                    onClick={cartIconHandleClick}
                    style={{color: cartColor}}>
          <AddShoppingCartIcon/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {description}
          </Typography>
          {/* <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
        </CardContent>
      </Collapse>
    </div>
  );
}

function Product({ product, user, setUser, cartCount, setCartCount }){

  console.log(user);
  const name = product.Product, image = product.images[0], description = product.Description, price = product.Price,
  ID = product._id;
  const artist = product.Artist;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [favColor, setFavColor] = React.useState("Gray");
  const [cartColor, setCartColor] = React.useState("Gray");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const urlString = "/products/" + ID;

  return (
    <Card className={classes.root}>
      <ProductHeader name = {name}/>
      <Link href={urlString}>
          <ProductImage image = {image}/>
      </Link>
      
      {/* <Nav.Item>
        <Nav.Link href="/"><ProductImage image = {image}/></Nav.Link>
      </Nav.Item> */}
      <ProductDescription description = {description} 
                          handleExpandClick = {handleExpandClick} 
                          expanded = {expanded} 
                          price = {price}
                          artist = {artist}
                          ID = {ID}
                          user = {user}
                          setUser = {setUser}
                          favColor = {favColor}
                          setFavColor = {setFavColor}
                          cartColor = {cartColor}
                          setCartColor = {setCartColor}
                          cartCount = {cartCount}
                          setCartCount = {setCartCount}
      />
    </Card>
  );
}

function Products({ productData, user, setUser, cartCount, setCartCount, flag }){
  console.log(user);

  /* if(productData.length == 0) return (
    <div>

    </div>
  ); */

  const products = productData.map((product, i) => 
  {
    if(flag === 1){
      return (
        <div className="col-lg-4 col-md-6 col-sm-12" style={{marginTop:'10px'}}>
          <Product product={product} user={user} setUser={setUser} 
          cartCount = {cartCount}
          setCartCount = {setCartCount}
          key = {i}/>
        </div>
      );
    }
    return (
      <div className="col-lg-3 col-md-4 col-sm-6" style={{marginTop:'10px'}}>
        <Product product={product} user={user} setUser={setUser} 
        cartCount = {cartCount}
        setCartCount = {setCartCount}
        key = {i}/>
      </div>
    );
    /* return (
        <div style={{marginTop:'10px'}}>
          <Product product={product} key = {i}/>
        </div>
    ); */
  }
  );
  return (
    <div className="container">
      <div className="row" style={{margin:'50px 0px 0px 0px'}}>
        {products}
      </div>
    </div>
    
  );
  
  /* return (
    <div>
        <div style={{margin:'70px 10px 0px 10px', display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
          {products}
        </div>
    </div>
  ); */
}

export default Products;