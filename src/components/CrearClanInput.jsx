/* import { useContext, useState } from "react";
import "../pages/styles/CrearClan.css";
import { clanesContext } from "../context/clanes/clanesContext";

export const CrearClanInput = () => {

  

  return (
    <>
      <div className="clanCredencialesContainer">
        <div className="titles">Agrega tus credenciales!</div>
        <div className="subTitles">
          Tu información se maneja de forma encriptada para tu seguridad🔐
        </div>
        <div className="crearClanSpotiBox">
          <div className="dosColumnas">
            <form>
              <div className="campoEntrada">
                <label className="inputTitles">
                  Correo Asociado a la cuenta:
                </label>

                <input
                  id="correo"
                  name="correo"
                  value={registerClanData.usuarioCredencialesClan}
                  className="inputCrearClan"
                  type="email"
                  placeholder="cuenta@tumail.com"
                  onChange={onChange}
                />
              </div>
              <div className="campoEntrada">
                <label className="inputTitles">Contraseña de la cuenta:</label>
                <input
                  id="contrasena"
                  name="contrasena"
                  value={registerClanData.contrasenaClan}
                  className="inputCrearClan"
                  type="password"
                  placeholder="Contraseña de la cuenta"
                  onChange={onChange}
                />
              </div>
            </form>
          </div>
          <button>Crear Clan</button>
        </div>
        <span>Preguntas Frecuentes❔</span>
      </div>
      <div className="clanBackground">
        <div className="clanImgBackground circle"></div>
      </div>
    </>
  );
};
 */