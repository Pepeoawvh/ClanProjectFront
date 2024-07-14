import React from "react";
import "./styles/QueSonLosClanes.css";

export const QueSonLosClanes = () => {
  return (
    <>
      <div className="grid clanes-page w-full ">
        <div className="grid auto-rows-min justify-items-center sm:grid sm:grid-cols-2 ">
          <div className="grid justify-center text-center sm:mx-32">
            <h1 className="text-xl mb-8 sm:text-3xl sm:mb-0 sm:mt-8">¿Qué es un "CLAN"?</h1>
            <p className="mx-6 text-justify sm:text-left sm:mx-0 sm:text-xl">
              Un clan es un espacio donde múltiples usuarios pueden compartir
              sus cuentas de suscripción a cambio de una contribución justa.
              Esta contribución retribuye al usuario que proporciona su cuenta
              para el beneficio del clan.
            </p>
          </div>
          <div className="mt-8 queSonLosClanesImg"> </div>
        </div>
        <div className="grid auto-rows-min ">
          <h1 className="grid text-center text-2xl  my-4">¿Cómo empezar?</h1>

          <div className="grid auto-rows-min bg-[#2f25695a] p-8 m-4 rounded-xl  sm:mx-96 ">
            <h2 className="text-center">Comparte tu suscripción</h2>
            <ol className="grid ml-8 mt-4">
              <li>1. Registrate en Clan</li>
              <li>2. Elige tu plataforma</li>
              <li>3. Ingresa los cupos libres</li>
              <li>4. Añade tus credenciales</li>
              <li>5. Crea y administra tu Clan!</li>
            </ol>
          </div>
          <div className="grid auto-rows-min bg-[#2f25695a] p-8 m-4 rounded-xl sm:mx-96  ">
            <h2 className="text-center">Unete a un Clan</h2>
            <ol className="grid ml-8 mt-4">
              <li>1. Registrate en CLAN</li>
              <li>2. Elige tu plataforma</li>
              <li>3. Unete a un Clan</li>
              <li>4. Haz tu primer pago</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
