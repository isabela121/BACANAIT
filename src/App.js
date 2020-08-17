import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Site from './Site'
import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Servicos from './componentes/Servicos'
import Portfolio from './componentes/Portfolio'
import Tecnologia from './componentes/Tecnologia'
import Contatos from './componentes/Contatos'


function App() {
  return (

    <BrowserRouter>

      <div className="App">
        <Cabecalho />

        <Route path='/' exact component={Inicio} />
        <Route path='/servicos' component={Servicos} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/tecnologia' component={Tecnologia} />
        <Route path='/Contatos' component={Contatos} />
       
        <Rodape />
      </div>

    </BrowserRouter>
  );
}
export default App;
