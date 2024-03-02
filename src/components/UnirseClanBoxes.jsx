import { useContext, useState, useEffect } from "react";
import { useCounter } from "../hooks/useCounter.js";
import { clanesContext } from "../context/clanes/clanesContext.js";
import { usersContext } from "../context/users/usersContext.js";
import axios from "axios";
import "./styles/boxes.css";
import { ClanDisponibleBox } from "./ClanDisponibleBox.jsx";
/* componente para mostrar cuando se haga click en unirse a un clan y seleccionar la plataforma*/
export const UnirseClanBoxes = () => {

  const [selectedButton, setSelectedButton] = useState(null);
  const [clanesFiltrados, setClanesFiltrados] = useState([])
  const {
    obtenerServicio,
    isServiceSelected,
    nombreServicio,
    valorServicio,
    selectedClan
  } = useContext(clanesContext);
  const { user } = useContext(usersContext);
  
  const getClanes = async () => {
    const url = `${import.meta.env.VITE_BACKENDURL}/clan/getAll/${
      user._id
    }?plataforma=${isServiceSelected}`;
    const token = JSON.parse(localStorage.getItem("userToken"));
    const { data } = await axios.get(url, {
      headers: {
        authorization: `Token ${token}`,
      },
    });
    console.log(data);
    setClanesFiltrados(data.data)
  };
  useEffect(() => {
    obtenerServicio();
    getClanes();
  }, [isServiceSelected]);

  return (
    <div className="clanDisponibleContainer">
      <span className="unirseClanTitle">
        Clanes Disponibles para {nombreServicio}
      </span>
{
  clanesFiltrados.map((clan)=>(
    <ClanDisponibleBox key= {clan._id} clan={clan}/>
  ))
}
    </div>
  );
};
