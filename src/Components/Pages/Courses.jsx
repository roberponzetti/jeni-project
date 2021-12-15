import React, {Component} from 'react'
import CourseGrid from '../Organisms/CourseGrid'
import axios from 'axios'

class Courses extends Component {

  constructor(props){
    super(props)

    this.state = {
      courses:[]
    }
  }

  componentDidMount(){
    axios.get('http://my-json-server.typicode.com/roberponzetti/json-db/cursos')
    .then(response =>
        this.setState({
            courses: response.data
        })
    )
  }

  render(){
    const {courses} = this.state

    return <CourseGrid courses={courses} />
  } 
}

export default Courses;