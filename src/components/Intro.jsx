import React from 'react';

const Intro = () => {
    return ( 
        <div className="intro container-fluid">
            <article className="container">
                <div className="row">
                    <div className="col-12">
                    <img src="https://image.info.bci.cl/lib/fe3d157075640678761576/m/1/5a4cb465-c650-45cd-b26f-5deb3364088f.png" className="main-bci-logo" alt="" />
                    <h1 className="main-tit">Repositorio de Módulos para emails Salesforce Marketing Cloud</h1>
                    <p className="intro--paragraph">En este repositorio encontrarás módulos estandarizados, optimizados y alineados gráficamente para usar en la construcción de piezas para emails. Esto contribuye a tener mayor eficiencia en el desarrollo de piezas, así como alineación gráfica en lo que reciben nuestros clientes.<br/>
                    Filtra los módulos por categoría y selecciona uno para ver el detalle de integración en plantillas de correo.</p>
                    <a href="https://docs.google.com/presentation/d/1GSgp6HZFXPvnsVZu4yLFbrg2uGeqSRhYFjEYHUIYMm4/edit" rel="noopener noreferrer" className="boton boton--primario boton--documentacion u-margin-bottom-medium" target="_blank">Ver la documentación</a>
                    </div>
                </div>
            </article>
        </div>
     );
}
 
export default Intro;