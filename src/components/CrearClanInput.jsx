import "../pages/styles/CrearClan.css";

export const CrearClanInput = () => {

  return (
    <>
      <div className="crearClanSpotiContainer">
        <div className="titles">Agrega tus credenciales!</div>
        <div className="subTitles">
          Tu información se maneja de forma encriptada para tu seguridad🔐
        </div>
        <div className="crearClanSpotiBox">
          <div className="dosColumnas">
            <div className="campoEntrada">
              <label className="inputTittles">Correo Asociado a la cuenta:</label>
              <input
                id="correo"
                className="inputCrearClan"
                type="email"
                placeholder="cuenta@tumail.com"
              />
            </div>
            <div className="campoEntrada">
              <label className="inputTittles" >Contraseña de la cuenta:</label>
              <input
                id="contrasena"
                className="inputCrearClan"
                type="password"
                placeholder="Contraseña de la cuenta"
              />
            </div>
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

