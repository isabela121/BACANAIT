import React from 'react'
import {Link } from 'react-router-dom'


const Portfolio = props =>{
    return(

        <div>

            {/* Container (Portfolio Section) */}
            <div id='portfolio' className='container-fluid text-center bg-grey'>
            <h2>Portfólio</h2>
            <h4>Conheça alguns dos nossos projetos desenvolvidos</h4><br></br>  <br></br> 
            <div className='row text-center '>
                <div className='col-sm-4'>
                <div className='thumbnail'>
                <img src='pizza.png' alt='Pizza' />
                <p><strong>Fala pizza</strong></p>
                    <p>Site </p>
                </div>
                </div>
                <div className='col-sm-4'>
                <div className='thumbnail'>
                    <img src='gastro.png' alt='Gastrô' />
                    <p><strong>Gastrogrill</strong></p>
                    <p>Site</p>
                </div>
                </div>
                <div className='col-sm-4'>
                <div className='thumbnail'>
                    <img src='interatisa.png' alt='Interatisa' />
                    <p><strong>Interatisa</strong></p>
                    <p>Site</p>
                </div>
                </div>
            </div>
            
            <h2>Usamos estratégias de tecnologias para gerar resultados</h2>

            <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>
                

               

                
                </div>

            </div>

        </div>

    )
}

export default Portfolio