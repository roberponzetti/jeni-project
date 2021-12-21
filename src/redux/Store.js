import { createStore } from 'redux'
import { ADD_TO_CART } from './Actions'

const initialStore = {
    cart: []
}

//para que state no sea undefined le definimos que adopte el valor de initialStore
const rootReducer = (state = initialStore, {type, id}) => {
    if(type === ADD_TO_CART){
        // si ya existe en mi array el id que viene, retorno el estado como estaba, no actualizo
        if(state.cart.find(a => a === id)) return state
        return {
            ...state,
            cart: state.cart.concat(id)
        }
    }
    return state
}

export default createStore(rootReducer)