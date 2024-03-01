import { useContext, useState, useEffect } from "react";
import { useCounter } from "../hooks/useCounter.js";
import { clanesContext } from "../context/clanes/clanesContext.js";
import { usersContext } from "../context/users/usersContext.js";
import axios from "axios";
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
    selectedClan,
  } = useContext(clanesContext);
  const {user} = useContext(usersContext)
  const { count, increment, decrement, reset } = useCounter(1, cuposServicio);
  useEffect(() => {
    
    obtenerServicio();
    reset();
  }, [isServiceSelected]);
const getClanes = async () => {
  const url = `${import.meta.env.VITE_BACKENDURL}/clan/getAll/${user._id}?plataforma=${isServiceSelected}`
  const token = JSON.parse(localStorage.getItem('userToken'))
  const { data } = await axios.get(url,{
    headers:{
      "authorization":`Token ${token}`
    }
  });
  console.log (data); 
}
useEffect(() => {
  getClanes()
},[])
  return (
    <div className="clanDisponibleContainer">
      <span className="unirseClanTitle">
        Clanes Disponibles para {nombreServicio}
      </span>
      <div className="clanDisponibleBox">
        <div className="clanDisponibleBoxTitle">
          <span className="clanBoxTitleText">Clan de %Admin%</span>
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
