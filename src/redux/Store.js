import { applyMiddleware, combineReducers, createStore } from 'redux'
import { ADD_TO_CART, DELETE_FROM_CART, GET_COURSE_LIST } from './Actions'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialStore = {
    cart: []
}

const initialCourses = {
    courses: []
}

//para que state no sea undefined le definimos que adopte el valor de initialStore
const cartReducer = (state = initialStore, {type, id}) => {
    if(type === ADD_TO_CART){
        // si ya existe en mi array el id que viene, retorno el estado como estaba, no actualizo
        if(state.cart.find(a => a === id)) return state
        return {
            ...state,
            cart: state.cart.concat(id)
        }
    }
    if(type === DELETE_FROM_CART){
        return {
            ...state,
            //en mi array se van a quedar todos menos el que acabo de borrar
            cart: state.cart.filter(c => c !== id)
        }
    }
    return state
}

const courseReducer = (state = initialCourses, {type, courses}) => {

    if (type === GET_COURSE_LIST){
        return {
            ...state,
            courses: courses
        }
    }
    return state
}

export default createStore(combineReducers({ cartReducer, courseReducer }), composeWithDevTools(applyMiddleware( thunk )))