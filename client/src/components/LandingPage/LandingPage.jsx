import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import Headers from './Headers';

const useStayle = makeStyles({
    root:{
        minHeight : '100vh',
        backgroundImage: `url(${'https://fondosmil.com/fondo/11451.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

})

const LandingPage = () =>{

    const classes = useStayle()

    return(
        <div className={classes.root}>
            <CssBaseline></CssBaseline>
            <Headers></Headers>
        </div>
    )

}

export default LandingPage