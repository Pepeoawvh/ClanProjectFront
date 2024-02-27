import React, { useContext, useEffect } from "react";
import { useCounter } from "../hooks/useCounter.js";
import { clanesContext } from "../context/clanes/clanesContext.js";



export const CrearClanMain = () => {
  const {obtenerServicio, isServiceSelected, nombreServicio, cuposServicio, valorServicio} = useContext (clanesContext)
useEffect (() => {
obtenerServicio ()
reset ()

}, [isServiceSelected]) 

 const { count, increment, decrement, reset} = useCounter(0, cuposServicio);
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
      <span id="ganancia">Gana por mes: {(valorServicio/cuposServicio)*0.9} por cada cupo</span>
    </div>
    <span className="titles">¿Quieres publicar tu Clan?</span>
    <div className="crearClanButtonContainer">
      <div className="crearClan">
        <button>Clan Público</button>
        <span> Otros usuarios podrán ver tu clan </span>
      </div>
      <div className="crearClan">
        <button>Clan Privado</button> {/* dar funcionalidad a este boton */}
        <span>¡Envia un link privado a tus amigos! </span>
      </div>
    </div>
  </div>

</>
)
}
