import React from 'react'
import {Link } from 'react-router-dom'


const Cabecalho = props => {
    return (

        <div>

            <div className='jumbotron text-center'>
                <h1 >Bacana IT</h1> 
                <p>Inovação e Tecnologia</p> 
            </div>

            <nav class="navbar navbar-default navbar-fixed-top">
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>                        
                        </button>
                        
                        <Link className='navbar-brand' to='/'>Bacana IT</Link>
                        
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/'> INÍCIO </Link></li>
                            <li><Link to='/servicos'>SERVIÇOS</Link></li>
                            <li><Link to='/portfolio'>PORTFÓLIO</Link></li>
                            <li><Link to='/tecnologia'>TECNOLOGIAS</Link></li>
                            <li><Link to='/contatos'>CONTATO</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default Cabecalho