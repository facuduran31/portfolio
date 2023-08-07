import React from 'react'
import ProgressBar from 'react-customizable-progressbar'

function Skills(){
  return(
    <>
      <hr className="mt-5" id="Skills" />
        <div className="row">
          <div className="col-md-4 col-sm-12 justify-content-center d-flex">
            <div className="ms-3 p-2 bg-azul text-light">
              <i className="fa fa-solid fa-gear"></i>
            </div>  
            <div className="bg-verdeagua p-2">
              HABILIDADES
            </div>
          </div>
        </div>

        <div className='row mt-4 d-flex justify-content-around ms-3 me-3'>
          <div className='col d-flex align-items-center flex-column'>
            <h3 className='text-center'><b>Frontend</b></h3>
            <ProgressBar
              progress={90}
              radius={75}
            />
            <p className='text-center mt-3'>HTML, CSS, JavaScript, Bootstrap, React, Angular</p>
          </div>
          <div className='col d-flex align-items-center flex-column'>
            <h3 className='text-center'><b>Backend</b></h3>
            <ProgressBar
              progress={75}
              radius={75}
              strokeColor="#a0d468"
            />
            <p className='text-center mt-3'>NodeJs, Express, ASP.NET</p>
          </div>
          <div className='col d-flex align-items-center flex-column'>
            <h3 className='text-center'><b>Databases</b></h3>
            <ProgressBar
              progress={65}
              radius={75}
              strokeColor="#ffce54"
            />
            <p className='text-center mt-3'>MySQL, Workbench, SQL Server</p>
          </div>
          <div className='col d-flex align-items-center flex-column'>
            <h3 className='text-center'><b>Repositories</b></h3>
            <ProgressBar
              progress={85}
              radius={75}
              strokeColor="#5d9cec"
            />
            <p className='text-center mt-3'>Git, GitHub</p>
          </div>
        </div>
    </>
  );
}

export default Skills;