import React from 'react'

const Contatos = props =>{
    return(

<div id='contact' className='container-fluid bg-grey'>
  <h2 className='text-center '>Contato</h2><br></br>
  <div className='row'>
    <div className='col-sm-5'>
      <p>Faça uma consulta ou solicite nossa visita. Estaremos à sua disposição.</p>
      <p><span className='glyphicon glyphicon-map-marker'></span> Brasil. BR</p>
      <p><span className='glyphicon glyphicon-phone'></span> 55 71 999774040</p>
      <p><span className='glyphicon glyphicon-envelope'></span> interatisa@gmail.com</p>
    </div>
    <div className='col-sm-7 '>
      <div className='row'>
        <div className='col-sm-6 form-group'>
          <input className='form-control' id='name' name='name' placeholder='Nome' type='text' required />
        </div>
        <div className='col-sm-6 form-group'>
          <input className='form-control' id='email' name='email' placeholder='E-mail' type='email' required />
        </div>
      </div>
      <textarea className='form-control' id='comments' name='comments' placeholder='Comentários' rows='5'></textarea><br />
      <div className='row'>
        <div className='col-sm-12 form-group'>
          <button className='btn btn-default pull-right' type='submit'>Enviar</button>
        </div>
      </div>
    </div>
  </div>
</div>


    )
}
export default Contatos