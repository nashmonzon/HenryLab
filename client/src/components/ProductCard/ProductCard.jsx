import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button, CardActions, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    minWidth: "350px",
    maxWidth: "350px",
    margin: "1em",
    // padding: 10,
    // boxSizing:'border-box',
    // display: 'inline-block',
    

  },
  // // bullet: {
  // //   display: 'inline-block',
  // //   margin: '0 2px',
  // //   transform: 'scale(0.8)',
  // // },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,

  },
  price: {
    fontSize: 20
  },

  
});

const ProductCard = ({ image, price, currency, stock, condition, title }) => {
  const classes = useStyles();



  return (

    <Card className={classes.root} elevation={5} >

    
    
      <img src={image} height='300' width='300' display='inline-flex' ></img>
      
      <CardContent>
        <Typography className={classes.title} gutterBottom variant='h6' component="h2">
          {title}
        </Typography>
        <Typography variant="h6" component="h2" className={classes.price}>
          {currency} {price}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" >
          Estado : {condition}
        </Typography>


        <Typography variant="body2" component="p" color="textSecondary" >
          Unidades en Stock: {stock}

        </Typography>

      </CardContent>

    </Card>
  )
}

export default ProductCard;
