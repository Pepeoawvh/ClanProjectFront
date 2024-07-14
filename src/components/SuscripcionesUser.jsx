import axios from "axios";
import { useEffect, useState } from "react";

export const SuscripcionesUser = ({ id }) => {
  const [infoClanes, setInfoClanes] = useState(null);
  const obtenerClan = async () => {
    const url = `${import.meta.env.VITE_BACKENDURL}/clan/get/${id}`;
    const { data } = await axios.get(url);
    setInfoClanes(data.data);
    console.log(data.data);
  };
  useEffect(() => {
    obtenerClan();
  }, []);
  return (
    <div>
      {JSON.stringify(infoClanes?.clan.plataformaClan)}
      {infoClanes?.clan.cuposClan}
    </div>
  );
};
