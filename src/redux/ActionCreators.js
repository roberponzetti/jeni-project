import { ADD_TO_CART } from "./Actions"

//recibo id de los cursos para guardarlos en el array y contarlos en el carrito
// cuando el atributo y el valor son iguales, en mi caso id=id, en ES6 paso directamente el valor
// ADD_TO_CART lo defino como constante y no como string para reutilizarlas. Las defino en nuestro archivo actions

const addToCart = id => ({
    type: ADD_TO_CART,
    id
})

// no va a ser default porque voy a tener mas constantes
export { addToCart }