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
      <div className="">
        <div className="regImgBackground grid">
          <div className="formContainer grid">
          <button className="text-xl" onClick={toggleForm}>
              {showRegister
                ? "Ya tengo una cuenta, Iniciar Sesión"
                : "¿Aún no tienes una cuenta? ¡Registrate!"}
            </button>
            {showRegister ? <FormularioRegistro /> : <FormularioLogIn />}

          </div>
        </div>
      </div>
    </>
  );
};
