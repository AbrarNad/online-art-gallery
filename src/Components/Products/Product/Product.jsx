import React from "react";
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from './styles';

const Product = ({product}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.images[0]} title={product.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.Product}
                    </Typography>
                    <Typography variant="h5" >
                        ${product.Price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {product.Description}
                    </Typography>
                    <CardActions disableSpacing className={classes.CardActions}>
                        <IconButton aria-label="Add to Cart">
                            <AddShoppingCart />
                        </IconButton>

                    </CardActions>
                </div>
            </CardContent>
        </Card>
    )
}

export default Product;