import React, { useState } from "react";
import { FormularioRegistro } from "../components/FormularioRegistro";
import { FormularioLogIn } from "../components/FormularioLogIn";
import "./styles/RegistroInicio.css";

export const RegistroInicio = () => {
  const [showRegister, setShowRegister] = useState(false);

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  return (
    <>
      <div className="regBackground ">
        <div className="regImgBackground circle">
          <div className="formContainer">
          <button className="regTitle" onClick={toggleForm}>
              {showRegister
                ? "Ya tengo una cuenta, Iniciar Sesion"
                : "¿Aun no tienes una cuenta? ¡Registrate!"}
            </button>
            {showRegister ? <FormularioRegistro /> : <FormularioLogIn />}

          </div>
        </div>
      </div>
    </>
  );
};
