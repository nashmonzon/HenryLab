import axios from 'axios';
import * as actions from './Containers';

export function getProducts(input) {
console.log(input)
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/api/search?q=${input}`)
    console.log(response)
    dispatch({

      type: actions.GET_PRODUCT,
      payload: response.data,
    })
  }
}

export function mayorPrecio() {
  return function (dispatch) {
    dispatch({ type: actions.MAY_PRICE })
  }
}

export function menorPrecio(){
  return function(dispatch){
      dispatch({ type: actions.MIN_PRICE})
  }
}

export function newProducts(condition){
  return function(dispatch){
      dispatch({ type: actions.NEW_PRODUCT, payload: condition})
  }
}

export function usedProducts(condition){
  return function(dispatch){
      dispatch({ type: actions.USED_PRODUCT, payload: condition})
  }
}