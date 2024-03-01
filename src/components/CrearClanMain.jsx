import React, { useContext, useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter.js";
import { clanesContext } from "../context/clanes/clanesContext.js";
import { useNavigate } from "react-router-dom";


export const CrearClanMain = () => {

  const initialClanData = {
    admin:"",
    usuarioCredencialesClan: "",
    contrasenaClan: "",
    plataformaClan:"",
    cuposClan:"",
    estadoClan:""
  };
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
      await register(registerClanData);
      setIsLoading(false);
      setRegisterClanData(initialregisterClanData);
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
      setRegisterClanData(initialregisterClanData);
    }
  };
  const { registerClan } = useContext(clanesContext);
  const [registerClanData, setRegisterClanData] = useState(initialClanData);
  const [isLoading, setIsLoading] = useState(false);
  const navegar = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);
  const [agregarCredenciales, setAgregarCredenciales] = useState(false);
  const {
    obtenerServicio,
    isServiceSelected,
    nombreServicio,
    cuposServicio,
    valorServicio,
    selectedClan,
  } = useContext(clanesContext);
  const { count, increment, decrement, reset } = useCounter(1, cuposServicio);
  useEffect(() => {
    obtenerServicio();
    reset();
  }, [isServiceSelected]);

  return (
    <>
      {agregarCredenciales ? (
        <CrearClanInput />
      ) : (
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
              Ahorra por mes: {(valorServicio / cuposServicio) * 0.9 * count} en
              tu cuenta
            </span>
          </div>

          <span className="titles">¿Quieres publicar tu Clan?</span>
          <div className="crearClanButtonContainer">
            <div className="crearClan">
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
            <div className="crearClan">
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
          <div className="next">
            {selectedButton && (
              <button onClick={() => setAgregarCredenciales(true)}>
                Siguiente
              </button>
            )}
          </div>
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
        </div>
      )}
    </>
  );
};
