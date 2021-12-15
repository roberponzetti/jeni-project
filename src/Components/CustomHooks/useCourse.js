import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useCourse = id => {

    const [course, setCourse] = useState({})

    useEffect(() => {
        axios.get(`http://my-json-server.typicode.com/roberponzetti/json-db/cursos/${id}`)
        .then(response => setCourse(response.data))
      }, [])

    return course
} 

export default useCourse