import "../pages/styles/CrearClan.css";

export const CrearClanInput = () => {
  return (
    <>
      <div className="crearClanSpotiContainer">
        <div className="titles">Agrega tu Clan</div>
        <div className="crearClanSpotiBox">
          <div className="dosColumnas">
            <input
              className="inputCrearClan"
              placeholder="Link Invitacion %servicio%"
            ></input>
            <input
              className="inputCrearClan"
              placeholder="Domicilio en que figura %servicio%"
            ></input>
          </div>
          <div className="boxDown">
            <input placeholder="Adjunta captura con domicilio y usuarios disponibles"></input>
            <button className="send">SEND</button>
          </div>
          <button>Crear Clan</button>
        </div>

      </div>
      <div className="clanBackground">
        <div className="clanImgBackground circle"></div>
      </div>
    </>
  );
};
