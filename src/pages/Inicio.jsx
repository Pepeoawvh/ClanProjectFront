import { NavLink } from "react-router-dom";
import React from "react";
import "./styles/Inicio.css";


export const Inicio = () => {
  return (
    <>
      <div className="iniContainer">
        <div className="iniTitle">
          <div className="logoHome">
            <div className="logoContainer"></div>
          </div>
          <span className="iniSubTitle"> Cuentas Compartidas </span>
          <span className="iniText">
            Servicio para compartir y unirse a distintos planes, ahorrando y optimizando el pago de servicios.
          </span>
        </div>
        <div className="iniAction">
          <div className="iniActions">
            <NavLink to="/UnirseClan"><button>Unirme a una Suscripcion</button></NavLink>
            <span> ¡Únete a un Clan y ahorra!</span>
          </div>
          <div className="iniActions">
            <NavLink to="/CrearClan"><button>Compartir mi Suscripcion</button></NavLink>
            <span> ¡Comparte un Clan y ahorra!</span>
          </div>
        </div>
      </div>
      <div className="iniDarkLeft"></div>
      <div className="iniBackground">
        <div className="iniImgBackground"></div>
      </div>

    
   
    </>
  );
};
