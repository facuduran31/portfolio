import React from 'react';
import { motion } from 'framer-motion';

function Navbar(){
  return(
    <motion.nav 
      className="navbar navbar-expand-lg navbar-light bg-light shadow"
      initial={{ scaleX: 0}}
      animate={{ scaleX: 1}}
      transition={{ ease: 'easeOut', duration: 0.5}}
    >
      <a className="navbar-brand d-flex align-items-center ms-2" href="#">
        <div className="d-inline-flex ms-2 me-2">
          <i className="fa fa-code" aria-hidden="true"></i>
        </div>
        <h6 className="d-flex ms-2 mt-2 align-items-center text-uppercase">Facundo Duran</h6> 
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse justify-content-end me-2" id="navbarSupportedContent">
        <ul className="navbar-nav ms-3">
          <li className="nav-item">
            <a className="nav-link active text-dark" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#Experiencia">Experiencia</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#Educacion">Educación</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#Skills">Habilidades</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#Proyectos">Proyectos</a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;