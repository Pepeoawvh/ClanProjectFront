import React, { useContext, useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter.js";
import { clanesContext } from "../context/clanes/clanesContext.js";
import { CrearClanInput } from "./CrearClanInput.jsx";

export const CrearClanMain = () => {

const[selectedButton, setSelectedButton] = useState (null) 

const[agregarCredenciales, setAgregarCredenciales] = useState (false)




const {obtenerServicio, isServiceSelected, nombreServicio, cuposServicio, valorServicio, selectedClan} = useContext (clanesContext)
const { count, increment, decrement, reset} = useCounter(1, cuposServicio);
useEffect (() => {
obtenerServicio ()
reset ()

}, [isServiceSelected]) 

  return (
    <>
{
(agregarCredenciales)?

<CrearClanInput/>

:     <div className="crearClanMain">
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
  <span id="ganancia">Ahorra por mes: {((valorServicio/cuposServicio)*0.9)*count} en tu cuenta</span>
</div>




<span className="titles">¿Quieres publicar tu Clan?</span>
<div className="crearClanButtonContainer">
  <div className="crearClan">
    <button 
    className={(selectedButton === "publico")?"isSelected":""}
    onClick={() => {
      setSelectedButton ("publico")
      selectedClan("publico")}}>Clan Público</button>
    <tool-tip role="tooltip">
    👀 Otros usuarios podrán ver tu clan 
    </tool-tip>
  </div>
  <div className="crearClan">
    <button 
    className={(selectedButton === "privado")?"isSelected":""}
    onClick={() => {
      setSelectedButton ("privado")
      selectedClan("privado")}}>Clan Privado</button>
    <tool-tip role="tooltip">
    👀 Envia el link privado a tus amigos!
    </tool-tip>
  </div>


</div>
<div className="next">
  {selectedButton && (
    <button onClick={() => setAgregarCredenciales(true)}>
      Siguiente
    </button>
  )}
</div>

</div>

}

</>
)
}
