import { ADD_TO_CART, DELETE_FROM_CART, GET_COURSE_LIST } from "./Actions"
import axios from 'axios'

//recibo id de los cursos para guardarlos en el array y contarlos en el carrito
// cuando el atributo y el valor son iguales, en mi caso id=id, en ES6 paso directamente el valor
// ADD_TO_CART lo defino como constante y no como string para reutilizarlas. Las defino en nuestro archivo actions

const addToCart = id => ({
    type: ADD_TO_CART,
    id
})

const deleteFromCart = id => ({
    type: DELETE_FROM_CART,
    id
})
//en este caso, primero hago la peticion y desp retorno el objeto
const getCourseList = () => dispatch => {
    axios.get('http://my-json-server.typicode.com/roberponzetti/json-db/cursos')
    .then(response => {
        return dispatch({
            type: GET_COURSE_LIST,
            courses: response.data
        })
    })
}

// no va a ser default porque voy a tener mas constantes
export { addToCart, deleteFromCart, getCourseList }