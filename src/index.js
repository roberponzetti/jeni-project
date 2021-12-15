import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
// import useFetch from "./CustomHooks/useFetch"
// import useCounter from "./CustomHooks/useCounter"

// const users = useFetch("http://my-json-server.typicode.com/roberponzetti/json-db/cursos", [])
// const counterOne = useCounter()
// {counterOne.count}
// {<br/>}
// <button onClick={counterOne.increase}>Agregar</button>
// <button onClick={counterOne.decrease}>Disminuir</button>

const root = document.getElementById("root")

ReactDOM.render(<App />,root);

reportWebVitals();
