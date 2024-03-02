import React, { useContext, useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter.js";
import { clanesContext } from "../context/clanes/clanesContext.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usersContext } from "../context/users/usersContext.js";

export const CrearClanMain = () => {
  const initialClanData = {
    usuarioCredencialesClan: "",
    contrasenaClan: "",
  };

  const [registerClanData, setRegisterClanData] = useState(initialClanData);
  const [isLoading, setIsLoading] = useState(false);
  const navegar = useNavigate();
  const {
    obtenerServicio,
    isServiceSelected,
    nombreServicio,
    cuposServicio,
    valorServicio,
    selectedClan,
    registerClan
  } = useContext(clanesContext);
  const {user} = useContext(usersContext)
  const onChange = (e) => {
    setRegisterClanData({
      ...registerClanData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await registerClan(registerClanData, user.correo);
      setIsLoading(false);
      setRegisterClanData(initialClanData);
      toast("Tu clan ha sido creado, Felicitaciones!", {
        duration: 2000,
        position: "bottom-right",
        border: "1px solid black",
        style: { background: "black" },
      });
      navegar("/Profile");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setRegisterClanData(initialClanData);
      toast("Ups, algo salio mal, intentalo nuevamente!", {
        duration: 2000,
        position: "bottom-right",
        border: "1px solid black",
        style: { background: "black" },
      });
    }
  };

  const [selectedButton, setSelectedButton] = useState(null);
 
  const { count, increment, decrement, reset } = useCounter(1, cuposServicio);
  useEffect(() => {
    obtenerServicio();
    reset();
  }, [isServiceSelected]);

  return (
    <>
      <div className="crearClanMain">
          <span id="counterTitle">¿Cuantos cupos tendrá tu clan?</span>

          <div className="crearClanCounter">
            <button className="counterButton" onClick={decrement}>
              -
            </button>
            <div className="counter">
              <span id="contador">{count}</span>
            </div>
            <button className="counterButton" onClick={increment}>
              +
            </button>
          </div>
          <div className="crearClanTexts">
            <span id="cupos">
              {nombreServicio} lo pueden utilizar hasta {cuposServicio}
            </span>
            <span id="ganancia">
              Ahorra por mes: {valorServicio * 0.9 * count} en
              tu cuenta
            </span>
          </div>

          <span className="titles publicarClanTitles">
            ¿Quieres publicar tu Clan?
          </span>
          <div className="publicarClanButtonContainer">
            <div className="publicarClan">
              <button
                className={selectedButton === "publico" ? "isSelected" : ""}
                onClick={() => {
                  setSelectedButton("publico");
                  selectedClan("publico");
                }}
              >
                Clan Público
              </button>
              <tool-tip role="tooltip">
                👀 Otros usuarios podrán ver tu clan
              </tool-tip>
            </div>
            <div className="publicarClan">
              <button
                className={selectedButton === "privado" ? "isSelected" : ""}
                onClick={() => {
                  setSelectedButton("privado");
                  selectedClan("privado");
                }}
              >
                Clan Privado
              </button>
              <tool-tip role="tooltip">
                👀 Envia el link privado a tus amigos!
              </tool-tip>
            </div>
          </div>


          <form onSubmit={onSubmit}>
          <div className="crearClanCredsContainer">
            <div className="titles">Agrega tus credenciales</div>
            <div className="subTitles">
              Tu información se maneja de forma encriptada para tu seguridad🔐
            </div>
            <div className="crearClanCredsBox">
              <div className="dosColumnas">
                <div className="campoEntrada">
                  <label className="inputTitles">
                    Correo Asociado a la cuenta:
                  </label>

                  <input
                    id="correo"
                    name="usuarioCredencialesClan"
                    value={registerClanData.usuarioCredencialesClan}
                    className="formItem"
                    type="email"
                    placeholder="cuenta@tumail.com"
                    onChange={onChange}
                  />
                </div>
                <div className="campoEntrada">
                  <label className="inputTitles">
                    Contraseña de la cuenta:
                  </label>
                  <input
                    id="contrasena"
                    name="contrasenaClan"
                    value={registerClanData.contrasenaClan}
                    className="formItem"
                    type="password"
                    placeholder="Contraseña de la cuenta"
                    onChange={onChange}
                  />
                </div>
              </div>

              <button
                className="formButton crearClanButton"
                id="crearClanButton"
                type="submit"
                disabled={isLoading} 
              >
                Crear Clan
              </button>
            </div>
            
          </div>
        </form>
      </div>
    </>
  );
};
