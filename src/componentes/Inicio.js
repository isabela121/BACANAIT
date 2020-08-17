import React from 'react'

const Inicio = props => {

    return(

<div> 


        <div id='about' className='container-fluid'>
        <div className='row'>
            <div className='col-sm-8'>
            <h2>A Bacana IT</h2><br />
            <h4>É um escritório de tecnologia da informação e comunicação focada em desenvolvimento de sistemas web, sites, campanhas, desenvolvimento UX e UI em aplicativos para smartphones e e-mail marketing, gerando resultados positivos e inovadores para diversos negócios.</h4><br />
            <p>Nos propomos a ouvir suas idéias e a lhe ajudar a construir o seu negócio com o objetivo de propocionar as melhores soluções personalizadas para sua empresa e alcançar sucesso.</p>
        <br></br>
            </div>
            <div className='col-sm-4'>
            <span className='glyphicon glyphicon-signal logo'></span>
            </div>
        </div>
        </div>

        <div className='container-fluid bg-grey'>
        <div className='row'>
            <div className='col-sm-4'>
            <span className='glyphicon glyphicon-globe logo '></span>
            </div>
            <div className='col-sm-8'>
            <h2>Temos o que você precisa</h2><br />
            <h4>Faremos tudo o que você precisa para obter o seu app funcionando! Todos os sistemas construídos pela equipe da Bacana IT são responsivos para funcionar em qualquer dispositivo.</h4><br />
            
            </div>
        </div>
        </div>

</div>

    )
}

export default Inicio