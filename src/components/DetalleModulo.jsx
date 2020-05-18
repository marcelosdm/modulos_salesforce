import React, {Fragment, useState, useEffect} from 'react';

const DetalleModulo = () => {

    const [modulo, setModulos] = useState([]);

    useEffect (() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://bci.qa.globaldigital.cl/salesforce/v2/listado_modulos')
        const modulos = await data.json();
        setModulos(modulos);
    }


    return ( 
        <Fragment>
        {
            modulo.map(item =>
                <div className="detalle" key={item.id} data-mod={item.id}>
                    <div className="row">
                        <div className="col-12">                           
                            <div className="detalle--close">Cerrar</div>
                                <h2 className="detalle--tit">{item.nombre}</h2>
                                <h3 className="detalle--prefix">{item.modulo}</h3>
                                <p className="detalle--descr">{item.large_desc}</p>
                                <div className="detalle__preview">
                                    <div className="detalle__preview--single">
                                        <img src={`https://bci.qa.globaldigital.cl/salesforce/v2/img/${item.img}`} alt=""/>
                                    </div>
                                </div>
                                <ul className="detalle--especificaciones">
                                    {
                                        item.specs.map((especificacion, i) =>
                                            <li key={`Key${i}`} dangerouslySetInnerHTML={{ __html: especificacion }} />
                                        )
                                    }
                                </ul>
                                <ul className="detalle--archivos">
                                    {
                                        item.resource.map((recurso, i) =>
                                            <li key={`Key${i}`}><a href={`https://bci.qa.globaldigital.cl/salesforce/v2/modulos_html/${recurso}`} target="_blank" rel="noopener noreferrer" className="download-pagina">Descargar Ejemplo</a></li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
            )
        }
        </Fragment>
     );
}
 
export default DetalleModulo;