import axios from "axios";
import { useState, useEffect } from "react";

export const ClanDisponibleBox = ({ clan }) => {
  const [accountInfo, setAccountInfo] = useState(null)
  const fecha = new Date(clan.fechaCreacion);
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();
  const fechaFormateada = `${dia}/${mes}/${año}`;

  const getAccountInfo = async () => {
    try {
      const url = `${import.meta.env.VITE_BACKENDURL}/accounts/getAccountbyId/${
        clan.plataformaClan
      }`;
      const { data } = await axios.get(url);
      console.log(data);
      setAccountInfo(data)
    } catch (error) {
      console.error("Error al obtener datos de la cuenta", error);
    }
  };
  useEffect(() => {
    getAccountInfo();
  }, []);

  return (
    <div className="clanDisponibleBox">
      <div className="clanDisponibleBoxTitle">
        <NombreAdmin id={clan.admin} />
        <img className="clanDisponibleBoxImg"></img>
        <span> Creado el {fechaFormateada} ➡️ 💰{accountInfo?.precio} </span>
      </div>
      <div className="clanDisponibleBoxMiddle">
        <button className="buttonClanBox">UNIRME</button>
      </div>
      <div className="clanBoxCupos">
        {" "}
        {clan.cuposClan - clan.miembros.length} Cupos Disponibles
      </div>
    </div>
  );
};

const NombreAdmin = ({ id }) => {
  const [datosAdmin, setDatosAdmin] = useState(null);

  const obtenerDatosAdmin = async () => {
    try {
      const url = `${import.meta.env.VITE_BACKENDURL}/users/getUser/${id}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Token ${JSON.parse(
            localStorage.getItem("userToken")
          )}`,
        },
      });
      setDatosAdmin(data.data.user);
      console.log(data.data.user);
    } catch (error) {
      console.error("Error al obtener datos del Clan Admin:", error);
    }
  };
  useEffect(() => {
    obtenerDatosAdmin(id);
  }, []);
  return (
    <span className="clanBoxTitleText">Clan de {datosAdmin?.username} </span>
  );
};
