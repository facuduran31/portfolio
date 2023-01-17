import React from 'react'
import logoutn from '../img/logo-utn.png'

function Formacion(){
  return(
    <>
      <hr className="mt-5" id="Educacion" />
        <div className="row">
          <div className="col-md-4 justify-content-center col-sm-12 d-flex">
            <div className="ms-3 p-2 bg-azul text-light">
              <i className="fa fa-solid fa-lightbulb"></i>
            </div>  
            <div className="bg-verdeagua p-2">
              FORMACIÓN ACADÉMICA
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4 col-sm-12 text-center">
            <img src={logoutn} className='logo-empresa' alt="" />
          </div>
          <div className="col-md-8 col-sm-12 mt-2">
            <div className="ms-2">
              <b>Universidad Tecnológica Nacional</b>
              <p>Ingeniería en Sistemas de Información | 2021 - Act.</p>
              <ul>
                <li>Analista Universitario de Sistemas (35.0%)</li>
                <li>Ingeniero en Sistemas de Información (20.0%)</li>
                <li>Promedio actual 8.14</li>
                <li>Adquisición de conocimientos teóricos y prácticos sobre algoritmos y estructuras de datos.</li>
                <li>Adquisición de conocimientos teóricos de sintaxis y semántica de los lenguajes.</li>
              </ul>
            </div>
          </div>
        </div>
    </>
    
  );
}

export default Formacion