import axios from 'axios';
import * as actions from './Containers';


export function getProducts(input) {
 
  return function(dispatch){
      axios.get(`http://localhost:3001/api/search?q=${input}`)
      .then(res => {
          console.log(res.data)
          dispatch({ type: actions.GET_PRODUCT, payload: res.data})
      })
      .catch(err => {
          console.log(err)
          dispatch({ type: "ERROR", payload: err})
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