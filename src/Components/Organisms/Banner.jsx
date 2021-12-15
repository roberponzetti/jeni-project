import React from 'react'

const Banner = () => (
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="https://fondosmil.com/fondo/19293.jpg"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Jenifer Paira</p>
            <p> Mi sistema de cursos</p>
            <a href="https://ed.team" className="button">LOGIN</a>
          </div>
        </div>
      </div>
    </div>
)

export default Banner;