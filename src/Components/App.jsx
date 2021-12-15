import React, {Fragment} from 'react';
import "../styles/styles.scss";
import Home from './Pages/Home';
import Form from './Pages/Form';
import Courses from './Pages/Courses';
import Course from './Pages/Course';
import MainMenu from './Organisms/MainMenu'
import Historial from './Pages/Historial'
import Users from './Pages/Users';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => (
  <Router>
    <MainMenu/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cursos/:id" component={Course} />
      <Route path="/cursos" component={Courses} />
      <Route path="/historial/:valor" component={Historial} />
      <Route path="/historial" component={Historial} />
      <Route path="/usuarios" component={Users} />
      <Route path="/formulario" component={() => <Form name="Pagina de contacto" />} />
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Pagina no encontrada</span>
        </div>
      )} />
    </Switch>
  </Router>
);

export default App;
