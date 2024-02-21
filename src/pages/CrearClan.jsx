import React from 'react';
import { useCounter } from '../hooks/useCounter.js';
import "./styles/CrearClan.css";

export const CrearClan = () => {

  const { count, increment, decrement } = useCounter(0);


  return (
    <>
      <div className="crearClanContainer">
        <div className="crearClanNav">
<span>   Selecciona la cuenta que quieres compartir       </span>
<div className="crearClanNavGallery">
<div className="buttonUp"></div>
<div className="crearClanServicios">
  <a href=""> <div className="servicio"></div> </a>
  <a href=""> <div className="servicio"></div> </a>
  <a href=""> <div className="servicio"></div> </a>
  <a href=""> <div className="servicio"></div> </a>
  <a href=""> <div className="servicio"></div> </a>
  <a href=""> <div className="servicio"></div> </a>
</div>
<div class="buttonDown"></div>
</div>
        </div>

        <div className="crearClanMain">
          <span>¿Cuantos cupos tendra tu clan?</span>

          <div className="crearClanCounter">
            <button className="counterButton" onClick={decrement}>-</button>
            <div className="counter"><span id='contador'>{count}</span></div>
            <button className="counterButton" onClick={increment}>+</button>
            </div>
            <div className="crearClanTexts">
              <span>%Plataforma% lo pueden utilizar hasta %NCupos%</span>
              <span id='ganancia'>Gana por mes: %Ganancia% por cada cupo</span>
            </div>
            <span className="titles">Quieres publicar tu Clan?</span>
            <div className="crearClanButtonContainer">
              <div className="crearClan">
                <button>Clan Publico</button>
                <span> Publica tu grupo en Clan </span>
              </div>
              <div className="crearClan">
                <button>Clan Privado</button>
                <span> Envia un link privado a tus amigos! </span>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
};
