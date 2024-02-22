
import { useCounter } from "../hooks/useCounter.js";
export const CrearClanMain = () => {

 const { count, increment, decrement } = useCounter(0);
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
        %Plataforma% lo pueden utilizar hasta %NCupos%
      </span>
      <span id="ganancia">Gana por mes: %Ganancia% por cada cupo</span>
    </div>
    <span className="titles">¿Quieres publicar tu Clan?</span>
    <div className="crearClanButtonContainer">
      <div className="crearClan">
        <button>Clan Público</button>
        <span> Otros usuarios podrán ver tu clan </span>
      </div>
      <div className="crearClan">
        <button>Clan Privado</button>
        <span>¡Envia un link privado a tus amigos! </span>
      </div>
    </div>
  </div>

</>
)
}
