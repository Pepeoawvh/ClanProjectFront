import React, { useContext, useEffect, useState } from "react";
import { UnirseClanNav } from "../components/UnirseClanNav";
import { clanesContext } from "../context/clanes/clanesContext";
import { usersContext } from "../context/users/usersContext";
import { useNavigate } from "react-router-dom";
import { SeleccionaPlataforma } from "../components/SeleccionaPlataforma";
import { UnirseClanBoxes } from "../components/UnirseClanBoxes";
import "./styles/CrearClan.css";
import "./styles/UnirseClan.css";

export const UnirseClan = () => {
  const { isAuth } = useContext(usersContext);
  const { isServiceSelected } = useContext(clanesContext);
  const navegar = useNavigate();
  console.log(isServiceSelected);
  useEffect(() => {
    if (!isAuth) {
      console.log("saliendo");
      navegar("/RegistroInicio");
    }
  }, [isAuth]);

  return (
    <>
      <div className="UnirseClanContainer">
        <UnirseClanNav />
        {isServiceSelected ? <UnirseClanBoxes /> : <SeleccionaPlataforma />}
      </div>
      <div className="clanBackground">
        <div className="clanImgBackground circle"></div>
      </div>
    </>
  );
};
