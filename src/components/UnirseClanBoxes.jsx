import { useContext, useState, useEffect } from "react";
import { useCounter } from "../hooks/useCounter.js";
import { clanesContext } from "../context/clanes/clanesContext.js";

import "./styles/boxes.css";
/* componente para mostrar cuando se haga click en unirse a un clan y seleccionar la plataforma*/
export const UnirseClanBoxes = () => {

  const [selectedButton, setSelectedButton] = useState(null);
  const {
    obtenerServicio,
    isServiceSelected,
    nombreServicio,
    cuposServicio,
    valorServicio,
    selectedClan
  } = useContext(clanesContext);
  
  const { count, increment, decrement, reset } = useCounter(1, cuposServicio);
  useEffect(() => {
    obtenerServicio();
    reset();
  }, [isServiceSelected]);

  return (
    <div className="clanDisponibleContainer">
      <span className="unirseClanTitle">
        Clanes Disponibles para {nombreServicio}
      </span>
      <div className="clanDisponibleBox">
        <div className="clanDisponibleBoxTitle">
          <span className="clanBoxTitleText">Clan de </span>
          <img className="clanDisponibleBoxImg"></img>
          <span> %tiempo% activo / %Verificado%</span>
        </div>
        <div className="clanDisponibleBoxMiddle">
          <button className="buttonClanBox">UNIRME</button>
        </div>
        <div className="clanBoxCupos">{cuposServicio} Cupos Disponibles</div>
      </div>
      
    </div>
  );
};
