import React from 'react'

const Servicos = props => {

    return(
<div>

    {/* Container (Services Section) */}
    <div id='services' className='container-fluid text-center'>
        <h2>NOSSOS SERVIÇOS</h2>
        <h4>Para alcançar todas as tecnologias conheça nossos serviços e saiba como eles podem gerar valor e potencializar seu negócio</h4>
        <br />
        <div className='row '>
            <div className='col-sm-4'>
            <span className='glyphicon glyphicon-off logo-small'></span>
            <h4>Sites e Landing Pages</h4>
            <p>Sites responsivos para desktop e mobile,<br></br> desenvolvidos nos mais robustos frameworks.</p>
        </div>
        <div className='col-sm-4'>
            <span className='glyphicon glyphicon-heart logo-small'></span>
            <h4>Branding</h4>
            <p>Identidade visual (Logomarcas), <br></br>
            criação gráfica com layout visual agradável.</p>
        </div>
        <div className='col-sm-4'>
            <span className='glyphicon glyphicon-lock logo-small'></span>
            <h4>Relacionamento</h4>
            <p>Blogs<br></br>E-mail Marketing</p>
        </div>
    </div>
    <br /><br />
    <div className='row '>
        <div className='col-sm-4'>
        <span className='glyphicon glyphicon-leaf logo-small'></span>
        <h4>Ferramentas de pesquisa</h4>
        <p>Formulário de pesquisa com indicadores<br></br> de nível de satisfação</p>
    </div>
    <div className='col-sm-4'>
        <span className='glyphicon glyphicon-certificate logo-small'></span>
        <h4>UX e UI</h4>
        <p>Desenvolvimento de pesquisa UX<br></br>
        criação de UI para desktop e mobile.</p>
    </div>
    <div className='col-sm-4'>
        <span className='glyphicon glyphicon-wrench logo-small'></span>
        <h4> Banners e Campanhas</h4>
        <p>Layout para produtos digitais<br></br>
        </p>
    </div>
    </div>
    </div>
        
</div>

    )
}
export default Servicos