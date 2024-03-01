import React, { useState } from "react";
import { useContext } from "react";
import { usersContext } from "../context/users/usersContext";
import { useNavigate } from "react-router-dom";

import "./styles/Formularios.css";
import axios from "axios";
import { toast } from "react-toastify";

export const FormularioRegistro = () => {
  const initialRegisterData = {
    nombreCompleto: "",
    correo: "",
    contrasena: "",
  };
  const { register } = useContext(usersContext);
  const [registerData, setRegisterData] = useState(initialRegisterData);
  const [isLoading, setIsLoading] = useState(false);
  const navegar = useNavigate();

  const onChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register(registerData);
      setIsLoading(false);
      setRegisterData(initialRegisterData);
      toast("Registro exitoso, Bienvenido!", {
        duration: 2000,
        position: "bottom-right",
        border: '1px solid black',
        style: {background: "black",}
      });
      navegar("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setRegisterData(initialRegisterData);
      toast("Ups, algo salio mal, intentalo nuevamente!", {
        duration: 2000,
        position: "bottom-right",
        border: '1px solid black',
        style: {background: "black",}
      })
    }
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
        />{" "}
        {/**contraseña */}
        <button
          className="formItem formButton"
          id="botonRegistro"
          type="submit"
          disabled={isLoading}
        >
          {
            isLoading ? "Cargando..." : "Registrarse" // renderizado condicional
          }
        </button>
      </div>
    </form>
  );
};
