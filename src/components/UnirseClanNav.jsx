import axios from "axios";
import { useEffect, useState } from "react";
import { ServicioCuentaIMG } from "./ServicioCuentaIMG";

export const UnirseClanNav = () => {
  const [cuentas, setCuentas] = useState([]);
  const obtenerServicios = async () => {
    const url = `${import.meta.env.VITE_BACKENDURL}/accounts/getAllAccounts`;
    const { data } = await axios.get(url);
    console.log(data);
    setCuentas(data);
  };
  useEffect(() => {
    obtenerServicios();
  }, []);

  return (
    <>
      {" "}
      <div className="unirseClanNav">
        <span> Selecciona el servicio al que quieres unirte </span>

        {/* <div className="buttonUp"></div> */}
        <div className="unirseClanServicios">
          {cuentas.map((cuenta) => (
            <ServicioCuentaIMG
              key={cuenta._id}
              nombreCuenta={cuenta.nombreCuenta}
              imagenUrl={cuenta.imagenUrl}
              _id={cuenta._id}
            />
          ))}
        </div>
        {/* <div className="buttonDown"></div> */}
      </div>
    </>
  );
};
