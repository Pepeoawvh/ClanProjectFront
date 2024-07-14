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
      <div className="regImgBackground grid justify-items-center grid-rows-1">
        <div className="formContainer grid w-full sm:justify-items-center h-100">
          <button className="text-sm mx-12 px-8 mt-4 bg-purple-950 border border-violet-400 py-2 rounded-xl opacity-80" onClick={toggleForm}>
            {showRegister
              ? "Ya tengo cuenta, Iniciar Sesión"
              : "¿Aún no tienes cuenta? ¡Registrate Aquí!"}
          </button>
          {showRegister ? <FormularioRegistro /> : <FormularioLogIn />}
        </div>
      </div>
    </>
  );
};
