import React from "react";
import { NavLink } from "react-router-dom";
import "../pages/styles/Error404.css"

export const NotFound = () => {
  return (
    <div class="mainContainer404">
      <div className="error404">
        <span>Error #404</span>
        <span>Ups! esta página no existe</span>
        <NavLink className="volver" to="/">
          {" "}
          Volver al Inicio
        </NavLink>
      </div>
      </div>
        );
  
};
