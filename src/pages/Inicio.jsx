import { NavLink } from "react-router-dom";
import React from "react";
import "./styles/Inicio.css";

export const Inicio = () => {
  return (
    <>
      <div className="iniContainer mt-20 sm:mt-0">
        <div className="iniTitle">
          <div className="logoContainer"></div>

          <span className="iniSubTitle"> Cuentas Compartidas </span>
          <span className="iniText">
            Comparte y unete a distintos servicios ¡Ahorra y optimiza tus pagos!
          </span>
        </div>
        <div className="grid grid-cols-2 mt-20 sm:mt-8">
          <div className="grid auto-rows-min justify-items-center">
            <NavLink to="/UnirseClan">
              <button className="iniActionsButton mx-3">Unete a una Suscripción</button>
            </NavLink>
            <span className="text-sm text-center mx-3"> ¡Únete a un Clan y ahorra!</span>
          </div>
          <div className="grid auto-rows-min justify-center">
            <NavLink to="/CrearClan">
              <button className="iniActionsButton mx-3">Comparte tu Suscripción</button>
            </NavLink>
            <span className="text-sm text-center"> ¡Comparte un Clan y economiza!</span>
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
