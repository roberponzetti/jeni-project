import React, {Component} from 'react'


const withLoader = (value) => (WrappedComponent) => {
    return class WithLoader extends Component {
        constructor(props){
            super(props)
        }

        render(){
            return this.props[value].length === 0
            ? <h1 className="">Cargando...</h1>
            : <WrappedComponent {...this.props} />
        }

    }
}

export default withLoader