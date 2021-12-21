import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { addToCart, deleteFromCart } from '../../redux/ActionCreators';
import { connect } from 'react-redux'

const CourseCard = ({id,title,image,price,profesor, addCourseToCart, deleteCourseFromCart, cart}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <Link to={`/cursos/${id}`}>
            <img src={image} alt={title}/>
          </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="center">{title}</h3>
          <div className="s-main-center">
            {profesor}
          </div>
          <div className="s-main-center">
            { cart.find(a => a === id) ? 
              <button className="button--ghost-alert button--tiny" onClick={() => deleteCourseFromCart(id)}> remover del carrito </button>
              :
              <button 
                className="button--ghost-alert button--tiny"
                onClick={() => addCourseToCart(id)}
              >
              {`$ ${price} `}
            </button>
            }
          </div>
        </div>
      </article>
)
CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  profesor: PropTypes.string
}

CourseCard.defaultProps = {
  title: "No se encontro titulo",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png",
  price: "-",
  profesor: "Unknown"
}

const mapStateToProps = state => ({
  cart: state.cartReducer.cart
})

const mapDispatchToProps = dispatch => ({
  addCourseToCart(id){
    dispatch(addToCart(id))
  },
  deleteCourseFromCart(id){
    dispatch(deleteFromCart(id))
  }
})

//mapStateToProps se podria pasar como {}
export default connect(mapStateToProps, mapDispatchToProps)(CourseCard);