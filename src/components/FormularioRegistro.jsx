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
    confirmarContrasena: "", // Estado adicional para la confirmación de la contraseña
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
    // Verificar si las contraseñas coinciden
    if (registerData.contrasena !== registerData.confirmarContrasena) {
      toast("Las contraseñas no coinciden", {
        duration: 2000,
        position: "bottom-right",
        style: { background: "red" },
      });
      return;
    }
    setIsLoading(true);
    try {
      await register({
        nombreCompleto: registerData.nombreCompleto,
        correo: registerData.correo,
        contrasena: registerData.contrasena,
      });
      setIsLoading(false);
      setRegisterData(initialRegisterData);
      toast("Registro exitoso, Bienvenido!", {
        duration: 2000,
        position: "bottom-right",
        style: { background: "black" },
      });
      navegar("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setRegisterData(initialRegisterData);
      toast("Ups, algo salió mal, inténtalo nuevamente!", {
        duration: 2000,
        position: "bottom-right",
        style: { background: "black" },
      });
    }
  };

  return (
    <form className="formBanner" onSubmit={onSubmit}>
      <div className="formReg gap-6" id="formReg">
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
          type="password"
          placeholder="Password"
          value={registerData.contrasena}
          name="contrasena"
          onChange={onChange}
        />
        {/* Campo adicional para confirmar la contraseña */}
        <input
          className="formItem"
          type="password"
          placeholder="Confirmar Password"
          value={registerData.confirmarContrasena}
          name="confirmarContrasena"
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