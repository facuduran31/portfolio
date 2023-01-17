import React from 'react'
import logoutn from '../img/logo-utn.png'

function Experiencia(){
  return(
    <>
      <hr className="mt-5" id="Experiencia" />
        <div className="row">
          <div className="col-md-4 col-sm-12 justify-content-center d-flex">
            <div className="ms-3 p-2 bg-azul text-light">
              <i className="fa fa-solid fa-briefcase"></i>
            </div>  
            <div className="bg-verdeagua p-2">
              EXPERIENCIA LABORAL
            </div>
          </div>
        </div>

      <div className="row mt-3">
            <div className="col-md-4 col-sm-12 text-center">
              <img src={logoutn} className='logo-empresa' alt="logoutn" />
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="ms-2">
                <b>Encargado de laboratorios</b>
                <p>Universidad Tecnológica Nacional | Ene 2022 - Act.</p>
                <ul>
                  <li>Instalación y mantenimiento de máquinas virtuales.</li>
                  <li>Armado, desarmado y limpieza de PCs.</li>
                  <li>Soporte técnico al cuerpo docente.</li>
                  <li>Tareas administrativas varias.</li>
                  <li>Trabajo en equipo con profesionales experimentados.</li>
                </ul>
              </div>
            </div>
          </div>
    </>
  );
}

export default Experiencia;