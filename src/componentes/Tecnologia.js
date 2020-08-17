import React from 'react'

const Precos = props =>{
    return(

      <div id='pricing' className='container-fluid'>
        <div className='text-center'>
          <h2>Tecnologias</h2>
          <h4>Ferramentas utilizadas para desenvolver nossas tecnologias </h4><br></br> <br></br>
        </div>
        <div className='row '>
          <div className='col-sm-4 col-xs-12'>
            <div className='panel panel-default text-center'>
              <div className='panel-heading'>
                <h1>React</h1>
              </div>
            </div>      
          </div>     
          <div className='col-sm-4 col-xs-12'>
            <div className='panel panel-default text-center'>
              <div className='panel-heading'>
                <h1>Bootstrap</h1>
              </div>
            </div>      
          </div>       
          <div className='col-sm-4 col-xs-12'>
            <div className='panel panel-default text-center'>
              <div className='panel-heading'>
                <h1>Wordpress</h1>
              </div>
            </div>      
          </div>    <br></br>

          <div className='col-sm-4 col-xs-12'>
            <div className='panel panel-default text-center'>
              <div className='panel-heading'>
                <h1>HTML5 / CSS3</h1>
              </div>
            </div>      
          </div>    

          <div className='col-sm-4 col-xs-12'>
            <div className='panel panel-default text-center'>
              <div className='panel-heading'>
                <h1>MySQL</h1>
              </div>
            </div>      
          </div>  

          <div className='col-sm-4 col-xs-12'>
            <div className='panel panel-default text-center'>
              <div className='panel-heading'>
                <h1>Firebase</h1>
              </div>
            </div>      
          </div>      
        </div>
      </div>

    )
}


export default Precos