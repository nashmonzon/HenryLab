import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../Reducer/Action'
import { Link, useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Collapse, Toolbar } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";


const useStayle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh'
    },
    appBar: {
        background: 'none'
    },
    appBarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    colorText: {
        color: "#979696"
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: 'white',
        fontSize: '4.5rem'
    }

}))

export default function Headers() {
    const classes = useStayle()
    const [checked, setChecked] = useState(false)
    const [input, setInput] = useState("")
    const dispatch = useDispatch();
    const history = useHistory()

    const handleChenge = (e) => {
        setInput(
            e
        )

    }
    console.log(input)
    const handleClick = (e) => {
        // e.preventDefault()
        dispatch(getProducts(input))
        history.push('/catalogue')
    }

    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                    <h1 >My<span className={classes.colorText}>Nash</span>App</h1>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Bienvenidos a  <br />My<span className={classes.colorText}>Nash</span>App
                </h1>
                    <SearchBar
                        type="text"
                        name="input"
                        onChange={handleChenge}
                        onRequestSearch={handleClick}
                        placeholder='Empieza tu busqueda..'
                        style={{
                            margin: '0 auto',
                            maxWidth: 800
                        }}
                    />
                </div>
            </Collapse>


        </div>
    )
}