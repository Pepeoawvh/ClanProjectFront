import React, { useContext, useEffect } from 'react';
import "./styles/Pagos.css";
import axios from 'axios';
import { usersContext } from '../context/users/usersContext';

export const PagoExitoso = () => {
const detalles = "Tu pago ha sido procesado correctamente.";
const {user} = useContext(usersContext)
const addMember = async () => {
const url =`${import.meta.env.VITE_BACKENDURL}/clan/addmember`
console.log("clanid: ", JSON.parse(localStorage.getItem("clanToJoin")))
console.log("userid: ", user._id)
const {data} = await axios.patch (url,{clanId: JSON.parse(localStorage.getItem("clanToJoin")),userId:user._id },{
  headers:{
    "authorization":`Token ${JSON.parse(localStorage.getItem("userToken"))}`
  }
})
console.log(data)

  }
  useEffect(()=>{
addMember()

  }, [])

  return (
    <div className="container">
      <div className="contentpay">
        <h2 className="titulo">¡Pago Exitoso!</h2>
        <hr className="linea" />
        <div className="mensaje-container">
          <p className="mensaje">¡Gracias por tu pago! Tu transacción se ha completado con éxito.</p>
        </div>
        <div className="detalles-container">
          <p className="detalles">{detalles}</p>
        </div>
        <div className="ayuda-container">
          <p className="ayuda">¿Necesitas ayuda? Contacta con nuestro equipo de soporte.</p>
        </div>
      </div>
    </div>
  );
};

