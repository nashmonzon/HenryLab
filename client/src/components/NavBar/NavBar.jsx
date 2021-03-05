import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from '../../Reducer/Action'

import { AppBar, Toolbar, makeStyles, Typography, ThemeProvider, InputBase, IconButton } from '@material-ui/core'
import { navBarStyles } from './style.css';
import SearchIcon from '@material-ui/icons/Search'; 



function NavBar (){

  const classes = navBarStyles();
  const [input, setInput] = useState("")
  const dispatch = useDispatch();
  
  const handleChenge = (e)=>{
    setInput(
      e.target.value
    )
    
  }
  const handleClick = (e)=>{
    console.log(input)
    // e.preventDefault()
     dispatch(getProducts(input))
  }
 
  

  

    return(
        <div className={classes.root}>
      <AppBar className={classes.fondo} position="static">
        <Toolbar >
         

          <Typography variant="h6" className={classes.title}>
          <Link to='/' className={classes.textLink}  ><h1 >My<span className={classes.colorText}>Nash</span>App</h1></Link>
          </Typography>
        
          {/* <div className={classes.search}> */}
              <IconButton type='submit' onClick={handleClick}  >
              <SearchIcon className={classes.searchIcon}/>

              </IconButton>
            <div className={classes.search} >

              
            
          <InputBase 

              type="text"
              placeholder="Search…"
              name="input"
              onChange={handleChenge}
              
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            </div>
            {/* </div> */}
        </Toolbar>
      </AppBar>
      
      
    </div>
    
    )

}

export default NavBar;
