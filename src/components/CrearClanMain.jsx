import React, { useContext, useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter.js";
import { clanesContext } from "../context/clanes/clanesContext.js";

export const CrearClanMain = () => {
  const {
    obtenerServicio,
    isServiceSelected,
    nombreServicio,
    cuposServicio,
    valorServicio,
    selectedClan,
  } = useContext(clanesContext);
  useEffect(() => {
    obtenerServicio();
    reset();
  }, [isServiceSelected]);

  const { count, increment, decrement, reset } = useCounter(1, cuposServicio);
  return (
    <>
      <div className="crearClanMain">
        <span id="counterTitle">¿Cuantos cupos tendrá tu clan?</span>

        <div className="crearClanCounter">
          <button className="counterButton" onClick={decrement}>
            -
          </button>
          <div className="counter">
            <span id="contador">{count}</span>
          </div>
          <button className="counterButton" onClick={increment}>
            +
          </button>
        </div>
        <div className="crearClanTexts">
          <span id="cupos">
            {nombreServicio} lo pueden utilizar hasta {cuposServicio}
          </span>
          <span id="ganancia">
            Ahorra por mes: {(valorServicio / cuposServicio) * 0.9 * count} en
            tu cuenta
          </span>
        </div>

        <span className="titles">¿Quieres publicar tu Clan?</span>
        <div className="crearClanButtonContainer">
          <div className="crearClan">
            <button
              onClick={() => {
                selectedClan("publico");
              }}
            >
              Clan Público
            </button>
            <tool-tip role="tooltip">
              👀 Otros usuarios podrán ver tu clan
            </tool-tip>
          </div>
          <div className="crearClan">
            <button
              onClick={() => {
                selectedClan("privado");
              }}
            >
              Clan Privado
            </button>{" "}
            {/* dar funcionalidad a este boton */}
            <tool-tip role="tooltip">
              👀 Envia el link privado a tus amigos!
            </tool-tip>
          </div>

          <div className="next">
            <button onClick={"/"}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};
