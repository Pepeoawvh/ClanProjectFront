import React from "react";
import "./styles/Inicio.css";

export const Inicio = () => {
  return (
    <>
      <div class="iniContainer">
        <div className="iniTitle">
          <span className="iniTitleName"> CLAN </span>
          <span className="iniSubTitle"> CUENTAS COMPARTIDAS </span>
          <span className="iniText">
            Comparte y unete a subscripciones, ahorra y optimiza el pago de tus
            servicios!
          </span>
        </div>
        <div class="iniAction">
          <div class="iniActions">
 
            <button>Quiero unirme a una Subscripcion</button>{" "}
            <span> Unete a un clan y ahorra!</span>{" "}
          </div>
          <div class="iniActions">
            <button>Compartir mi subscripcion</button>{" "}
            <span> Crea un clan y ahorra!</span>{" "}
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
