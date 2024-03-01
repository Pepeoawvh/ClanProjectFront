import { useContext, useState } from "react";
import "../pages/styles/CrearClan.css";
import { useNavigate } from "react-router-dom";
import { clanesContext } from "../context/clanes/clanesContext";

export const CrearClanInput = () => {

  const initialClanData = {
    usuarioCredencialesClan: "",
    correo: "",
    contrasenaClan: "",
  };

  const { registerClan } = useContext(clanesContext);
  const [registerClanData, setRegisterClanData] = useState(initialClanData);
  const [isLoading, setIsLoading] = useState(false);
  const navegar = useNavigate();

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

  return (
    <>
      <div className="crearClanContainer">
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
