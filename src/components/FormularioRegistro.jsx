import React, { useState } from "react";
import "./styles/Formularios.css";

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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
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