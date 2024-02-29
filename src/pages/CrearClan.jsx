import React, { useContext, useEffect, useState } from "react";
import { CrearClanMain } from "../components/CrearClanMain";
import { CrearClanNav } from "../components/CrearClanNav";

import "./styles/CrearClan.css";
import { clanesContext } from "../context/clanes/clanesContext";
import { usersContext } from "../context/users/usersContext";
import { useNavigate } from "react-router-dom";
import { SeleccionaPlataforma } from "../components/SeleccionaPlataforma";

export const CrearClan = () => {
  const {isAuth} = useContext (usersContext)
  const {isServiceSelected} = useContext (clanesContext)
  const navegar = useNavigate ()
  console.log(isServiceSelected)
  useEffect (() => {
    if (!isAuth){
      console.log("saliendo")
      navegar ("/RegistroInicio")
      
    }

  }, [isAuth])

  return (
    <>
      <div className="crearClanContainer">
        <CrearClanNav/>
        {
          isServiceSelected ? <CrearClanMain/> : <SeleccionaPlataforma/>
        }
        
      </div>
      <div className="clanBackground">
        <div className="clanImgBackground circle"></div>
      </div>

      

    </>
  );
};
