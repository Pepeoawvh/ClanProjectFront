import React, { useState } from "react";
import { useContext } from "react";
import { usersContext } from "../context/users/usersContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./styles/Formularios.css";

export const FormularioRegistro = () => {
  const initialRegisterData = {
    nombreCompleto: "",
    correo: "",
    contrasena: "",
    direccion: "", // Agregado campo dirección
    edad: "", // Agregado campo edad
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
      toast("Ups, algo salió mal, inténtalo nuevamente!", {
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
        />
        <input
          className="formItem"
          type="email"
          placeholder="Email"
          value={registerData.correo}
          name="correo"
          onChange={onChange}
        />
        <input
          className="formItem"
          type="text"
          placeholder="Dirección"
          value={registerData.direccion}
          name="direccion"
          onChange={onChange}
        />
        <input
          className="formItem"
          type="number"
          placeholder="Edad"
          value={registerData.edad}
          name="edad"
          onChange={onChange}
        />
        <input
          className="formItem"
          type="password"
          placeholder="Password"
          value={registerData.contrasena}
          name="contrasena"
          onChange={onChange}
        />
        <button
          className="formItem formButton"
          id="botonRegistro"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Cargando..." : "Registrarse"}
        </button>
      </div>
    </form>
  );
};
