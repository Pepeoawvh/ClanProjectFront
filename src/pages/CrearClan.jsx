import "./styles/CrearClan.css";

export const CrearClan = () => {
  return (
    <>
      <div className="crearClanContainer">
        <div className="crearClanNav">
<span>   Selecciona la cuenta que quieres compartir       </span>
<div className="crearClanNavGallery">
<div class="buttonUp"></div>
<div class="crearClanServicios">
  <a href=""> <div></div> </a>
  <a href=""> <div></div> </a>
  <a href=""> <div></div> </a>
  <a href=""> <div></div> </a>
  <a href=""> <div></div> </a>
  <a href=""> <div></div> </a>
  <div class="buttonDown"></div>
</div>
</div>
        </div>

        <div className="crearClanMain">
          <span>¿Cuantos cupos tendra tu clan?</span>

          <div className="crearClanCounter">
            <button className="counterButton">-</button>
            <div className="counter"></div>
            <button className="counterButton">+</button>
            <div className="crearClanTexts">
              {" "}
              <span>%Plataforma% lo pueden utilizar hasta %NCupos%</span>
              <span>Gana por mes: %Ganancia% por cada cupo</span>
            </div>
            <span className="titles">Quieres publicar tu Clan?</span>
            <div className="crearClanButtonContainer">
              <div className="crearClan">
                <button>Clan Publico</button>
                <span> Publica tu grupo en Clan </span>
              </div>
              <div className="crearClan">
                <button>Clan Privado</button>
                <span> Envia un link privado a tus amigos! </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
