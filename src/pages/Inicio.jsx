import { NavLink } from "react-router-dom";
import React from "react";
import "./styles/Inicio.css";

export const Inicio = () => {
  return (
    <>
      <div className="iniContainer">
        <div className="iniTitle">
            <div className="logoContainer"></div>

          <span className="iniSubTitle"> Cuentas Compartidas </span>
          <span className="iniText">
            Comparte y unete a distintos servicios ¡Ahorra y optimiza tus pagos!
          </span>
        </div>
        <div className="iniAction">
          <div className="iniActions">
            <NavLink to="/UnirseClan">
              <button>Unirme a una Suscripción</button>
            </NavLink>
            <span> ¡Únete a un Clan y ahorra!</span>
          </div>
          <div className="iniActions">
            <NavLink to="/CrearClan">
              <button>Compartir mi Suscripción</button>
            </NavLink>
            <span> ¡Comparte un Clan y economiza!</span>
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
