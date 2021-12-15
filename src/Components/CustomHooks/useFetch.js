import React, {useState, useEffect} from 'react'
import axios from 'axios'

function useFetch(url, initialState){   //aca tambien podria pasarle por parametro las opciones, si quiero que sea GET, POST, etc
    const [data, setData] = useState(initialState) // con setData actualizo data, lo mismo debajo
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null)

    function getData(){
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(response => {
            setData(response)
            setLoading(false)
        })
        .catch(error => {
            setLoading(false)
            setError(error)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        data,
        loading,
        error
    }
}

export default useFetch