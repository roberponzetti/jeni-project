import React, {Component} from 'react'
import UserCard from '../Molecules/UserCard';
import axios from 'axios'
import UsersGrid from '../Organisms/UsersGrid';

class Users extends Component {

    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }

// componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
//     .then(response => response.json())
//     .then(json => {
//         this.setState({
//             users: json
//         })
//     }
//     )
// }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({
                users: response.data
            })
        })
    }

    render(){
        const {users} = this.state
        return <UsersGrid users={users} />
    }
}

export default Users