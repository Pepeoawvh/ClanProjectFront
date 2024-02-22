import React from "react";
import { CrearClanMain } from "../components/CrearClanMain";
import { CrearClanNav } from "../components/CrearClanNav";
import { CrearClanSpotify } from "../components/CrearClanSpotify";
import "./styles/CrearClan.css";

export const CrearClan = () => {
  
  return (
    <>
      <div className="crearClanContainer">
        <CrearClanNav/>
        <CrearClanMain />
      </div>
      <div className="clanBackground">
        <div className="clanImgBackground circle"></div>
      </div>

      <CrearClanSpotify/>
    </>
  );
};
