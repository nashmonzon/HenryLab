import React ,{useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux";
import {mayorPrecio, menorPrecio, usedProducts, newProducts} from '../../Reducer/Action'
import {Button, FormControl, InputLabel, makeStyles, Menu, MenuItem, Select} from '@material-ui/core'

const useStyle = makeStyles(theme =>({
    formControl:{
        minWidth: 100,
        margin: theme.spacing(2)
    },
   
}))

const Filter = ()=>{
    const classes = useStyle();
    const dispatch = useDispatch();
    const [ anchorEl, setAnchorEl ] = useState("");
    const handleClick = (event) => {
        setAnchorEl(event.target.value)
      }
   

    return(
        <>  
        <FormControl className={classes.formControl}>
            <InputLabel >Filtrar por</InputLabel>
            <Select  onChange={handleClick}>
            <MenuItem value="Menor precio" onClick={ () => dispatch(menorPrecio())}> Menor precio </MenuItem>
            <MenuItem value="Mayor precio" onClick={ () => dispatch(mayorPrecio())}> Mayor precio </MenuItem>
            <MenuItem value="Nuevo" onClick={ () => dispatch(newProducts("new"))}> Nuevo </MenuItem> 
            <MenuItem value="Usado" onClick={ () => dispatch(usedProducts("used"))}> Usado </MenuItem>
            </Select>
        </FormControl>
        </>
    )

}
export default Filter;