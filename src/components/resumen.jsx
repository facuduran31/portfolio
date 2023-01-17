import React from 'react'
import Experiencia from './experiencia';
import Formacion from './formacion';
import Skills from './skills'
import fotocv from '../img/fotocv.png'
import { motion } from 'framer-motion';

function Resumen(){
  return(
    <motion.div 
      className="container bg-light shadow shadow-lg p-4"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: "easeIn", duration: 1 }}
    >
      <div className="row">
        <div className="col-md-4 col-sm-12 position-relative d-flex flex-column">
          <div className="fotocvcontainer position-absolute top-0 start-50 translate-middle">
            <img src={fotocv} className="w-100 shadow-lg fotocv" alt="" />
          </div>
          <div className="nomdesc">
            <motion.p 
              className="border-bottom border-verdeagua mt-5 fs-4 pb-2 border-4 rounded text-uppercase text-dark text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
                Facundo Nicolas Duran
            </motion.p>
            <motion.p 
              className="text-center text-uppercase"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              Estudiante de Ingeniería en Sistemas de Información
            </motion.p>
          </div>
        </div>
        <motion.div 
          className="col-md-8 col-sm-12 mt-5 d-block ps-2 border-start border-4 border-verdeagua"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <p className="ms-2 fs-4 text-uppercase text-dark">RESUMEN</p>
          <p className="ms-2">Actualmente estudiante de la carrera de Ingeniería en Sistemas de Información con conocimientos elementales en desarrollo de software, experiencia en creación y edición de sitios web. Aprendizaje constante, disciplina y constancia.</p>
        </motion.div>
      </div>
      <Experiencia></Experiencia>
      <Formacion></Formacion>
      <Skills></Skills>
    </motion.div>
  );
}

export default Resumen;