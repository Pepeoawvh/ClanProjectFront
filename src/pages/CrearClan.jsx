import React, { useContext } from "react";
import { CrearClanMain } from "../components/CrearClanMain";
import { CrearClanNav } from "../components/CrearClanNav";
import { CrearClanSpotify } from "../components/CrearClanSpotify";
import "./styles/CrearClan.css";
import { clanesContext } from "../context/clanes/clanesContext";

export const CrearClan = () => {

  const {isServiceSelected} = useContext (clanesContext)
  console.log(isServiceSelected)

  return (
    <>
      <div className="crearClanContainer">
        <CrearClanNav/>
        {
          isServiceSelected && <CrearClanMain />
        }
        
      </div>
      <div className="clanBackground">
        <div className="clanImgBackground circle"></div>
      </div>

      <CrearClanSpotify/>
    </>
  );
};
