import React, { useState } from "react";
import "./styles/Formularios.css";
import axios from "axios";

export const FormularioRegistro = () => {


  const initalRegisterData = {
    nombreCompleto: "",
    correo: "",
    contrasena: "",
  };

  const [registerData, setRegisterData] = useState(initalRegisterData);

  const onChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(registerData);
    console.log(import.meta.env.VITE_BACKENDURL)
const url = `${import.meta.env.VITE_BACKENDURL}/users/register`
const data = await axios.post(url,registerData)
console.log(data)

  };

  return (
    <form className="formBanner" onSubmit={onSubmit}>

      <div className="formReg" id="formReg">
        <input
          className="formItem"
          type="text"
          placeholder="Nombre Completo"
          value={registerData.nombreCompleto}
          name="nombreCompleto"
          onChange={onChange}
        />{" "}
        {/**nombreCompleto */}
        <input
          className="formItem"
          type="email"
          placeholder="Email"
          value={registerData.correo}
          name="correo"
          onChange={onChange}
        />{" "}
        {/**correo */}
        <input
          className="formItem"
          type="password"
          placeholder="Password"
          value={registerData.contrasena}
          name="contrasena"
          onChange={onChange}
        /> <input
          className="formItem"
          type="password"
          placeholder="Confirma Password"
          value={registerData.contrasena}
          name="contrasena"
          onChange={onChange}
        />
        {/**contraseña */}
        <button className="formItem formButton" id="botonRegistro" type="submit">
          Registrarse
        </button>
      </div>
      
    </form>
  );
};