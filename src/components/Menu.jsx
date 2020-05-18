import React, {Fragment} from 'react';

const Menu = ({filtrarModulo}) => {

    return ( 
        <Fragment>
            <div className="col-12 col-md-3 col-lg-2">
                <div className="categorias">
                    <h2 className="sec-tit">Categorías</h2>
                    <div className="d-block d-md-none categorias__select">
                        <select name="categorias">
                            <option value="todos">Ver todo</option>
                            <option value="templates">Templates</option>
                            <option value="automatizados">Automatizados</option>
                            <option value="header">Encabezado</option>
                            <option value="saludo">Saludos</option>
                            <option value="cuerpo">Cuerpos de Texto</option>
                            <option value="listados">Listados</option>
                            <option value="recursos">Recursos</option>
                            <option value="footer">Cierres</option>
                            <option value="legales">Legales</option>
                        </select>
                    </div>
                    <ul className="categorias__listado d-none d-md-block">
                        <li className="categorias__listado--item active" data-cat="todos" onClick={()=> filtrarModulo('todos')}>Todos</li>
                        <li className="categorias__listado--item" data-cat="templates" onClick={()=> filtrarModulo('templates')}>Templates</li>
                        <li className="categorias__listado--item" data-cat="automatizados" onClick={()=> filtrarModulo('automatizados')}>Automatizados</li>
                        <li className="categorias__listado--item" data-cat="header" onClick={()=> filtrarModulo('header')}>Encabezado</li>
                        <li className="categorias__listado--item" data-cat="saludo" onClick={()=> filtrarModulo('saludo')}>Saludos</li>
                        <li className="categorias__listado--item" data-cat="cuerpo" onClick={()=> filtrarModulo('cuerpo')}>Cuerpos de Texto</li>
                        <li className="categorias__listado--item" data-cat="listados" onClick={()=> filtrarModulo('listados')}>Listados</li>
                        <li className="categorias__listado--item" data-cat="recursos" onClick={()=> filtrarModulo('recursos')}>Recursos</li>
                        <li className="categorias__listado--item" data-cat="footer" onClick={()=> filtrarModulo('footer')}>Cierres</li>
                        <li className="categorias__listado--item" data-cat="legales" onClick={()=> filtrarModulo('legales')}>Legales</li>
                    </ul>
                </div>       
            </div>
        </Fragment>
     );
}
 
export default Menu;