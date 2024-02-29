import { NavLink, Link } from "react-router-dom"; // Importamos los componentes <NavLink /> y <Link /> desde la carpeta node_modules
import React from "react";
import "./styles/Inicio.css";

export const Inicio = () => {
  return (
    <>
      <div className="iniContainer">
        <div className="iniTitle">
          <span className="iniTitleName"> CLAN </span>
          <span className="iniSubTitle"> CUENTAS COMPARTIDAS </span>
          <span className="iniText">
            Comparte y unete a subscripciones, ahorra y optimiza el pago de tus
            servicios!
          </span>
        </div>
        <div className="iniAction">
          <div className="iniActions">
          <NavLink to="/UnirseClan"><button>Unirme a una Suscripcion</button></NavLink>
            <span> Unete a un clan y ahorra!</span>
          </div>
          <div className="iniActions">
          <NavLink to="/CrearClan"><button>Compartir mi Suscripcion</button></NavLink>
            <span> Crea un clan y ahorra!</span>
          </div>
        </div>
      </div>

      <div className="iniDarkLeft"></div>
      <div className="iniBackground">
        <div className="iniImgBackground circle"></div>
      </div>
    </>
  );
};
