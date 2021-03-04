import { GET_PRODUCT, MAY_PRICE, MIN_PRICE, NEW_PRODUCT, USED_PRODUCT } from './Containers';

const initialState = {
    products: [],
}


export default function (state = initialState, action) {

    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                products: action.payload.results
            }
        case MAY_PRICE:
            return {
                ...state,
                products: [...state.products].sort((a, b) => a.price < b.price ? 1 : -1)
            }
        case MIN_PRICE:
            return {
                ...state,
                products: [...state.products].sort((a, b) => a.price > b.price ? 1 : -1)
            }
        case NEW_PRODUCT:
            return {
                ...state,
                products: [...state.products].sort((a, b) => a.condition > b.condition ? 1 : -1)
            }
        case USED_PRODUCT:
            return {
                ...state,
                products: [...state.products].sort((a, b) => a.condition < b.condition ? 1 : -1)
            }

        default: {
            return state
        }
    }

    // aca te falta poner un "case default" para que funcione el switch... sin eso rompe
}