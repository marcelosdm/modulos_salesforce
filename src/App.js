import React, {useState} from 'react';
import Menu from './components/Menu';
import Intro from './components/Intro';
import ListadoModulos from './components/ListadoModulos';
import DetalleModulo from './components/DetalleModulo';

function App() {

  const [filtro, setFiltro] = useState('todos');

  const filtrarModulo = (item) => {
    setFiltro(item);
  }

  return (
    <div id="repositorio_modulos_sf">
      <Intro/>
      <div className="pt-5 container">
        <div className="pt-5 row">
          <Menu filtrarModulo={filtrarModulo}/> 
          <div className="col-12 col-md-9 col-lg-10">
            <h2 className="sec-tit">Módulos</h2>
            <ListadoModulos filtro={filtro}/>
            <DetalleModulo/>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
