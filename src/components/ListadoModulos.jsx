import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Isotope from "isotope-layout";

const ListadoModulos = ({ filtro }) => {
  const [modulo, setModulos] = useState([]);
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState(filtro);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/http://bci.qa.globaldigital.cl/salesforce/v2/listado_modulos"
    );
    const modulos = await data.json();
    setModulos(modulos);
    setIsotope(
      new Isotope(".modulos .row", {
        itemSelector: ".modulos .col-12",
        layoutMode: "masonry",
      })
    );
  };

  useEffect(() => {
    if (isotope) {
      filterKey === "todos"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  useEffect(() => setFilterKey(filtro), [filtro]);

  return (
    <Fragment>
      <div className="modulos">
        <div className="row">
          {modulo.map((item) => (
            <div
              key={item.id}
              className={`col-12 col-sm-6 col-lg-3 active px-lg-3 ${item.category}`}
              data-cat={item.category}
              data-mod={item.id}
            >
              <div className="modulos__modulo modulos__modulo--absolute">
                <figure
                  className="modulos__modulo--preview"
                  style={{
                    backgroundImage: `url(https://bci.qa.globaldigital.cl/salesforce/v2/img/${item.prev_img})`,
                  }}
                />
                <div className="modulo__info">
                  <h3 className="modulo__info--titulo">{item.nombre}</h3>
                  <h4 className="modulo__info--prefix">{item.modulo}</h4>
                  <p className="modulo__info--descr">{item.short_desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ListadoModulos;
