import React from 'react';
import './styles/PreguntasFrecuentes.css'; 


export const PreguntasFrecuentes = () => {
  return (
   <div className="megacontainerFaq">
    <div className="grid auto-rows-min">
      <h1 className="text-2xl text-center">Preguntas Frecuentes</h1>
      <div className=" sm:mx-64 ">
        <div className="column">
          <div className="question text-justify">
            <h2 className='text-center'>¿Cómo puedo cambiar mi contraseña?</h2>
            <p className='sm:mx-12'>Puedes cambiar tu contraseña iniciando sesión en tu cuenta, y luego yendo a la sección de configuración de la cuenta. Allí encontrarás la opción para cambiar tu contraseña.</p>
          </div>
          <div className="question text-justify">
            <h2 className='text-center'>¿Cuáles son los requisitos para unirme a un grupo?</h2>
            <p className='sm:mx-12'>Los requisitos para unirte a un grupo pueden variar dependiendo del grupo en cuestión. Algunos grupos pueden requerir una suscripción activa, mientras que otros pueden tener requisitos específicos de nivel o experiencia en el juego.</p>
          </div>
          <div className="question text-justify">
            <h2 className='text-center'>¿Cómo puedo contactar al soporte técnico?</h2>
            <p className='sm:mx-12'>Puedes contactar al soporte técnico enviando un correo electrónico a support@example.com. También puedes encontrar un enlace para contactar al soporte técnico en la sección de ayuda de nuestra página web.</p>
          </div>
        </div>
        <div className="column">
        <div className="question text-justify">
        <h2 className='text-center'>¿Qué debo hacer si olvidé mi nombre de usuario?</h2>
            <p className='sm:mx-12'>Si olvidaste tu nombre de usuario, puedes intentar recuperarlo utilizando la opción de "Olvidé mi nombre de usuario" en la página de inicio de sesión. Si eso no funciona, puedes contactar al soporte técnico para obtener ayuda adicional.</p>
          </div>
          <div className="question text-justify">
            <h2 className='text-center'>¿Cómo puedo cancelar mi suscripción?</h2>
            <p className='sm:mx-12'>Para cancelar tu suscripción, inicia sesión en tu cuenta y ve a la sección de suscripciones. Allí encontrarás la opción para cancelar tu suscripción actual.</p>
          </div>
          <div className="question text-justify">
            <h2 className='text-center'>¿Puedo cambiar mi nombre de usuario?</h2>
            <p className='sm:mx-12'>Sí, puedes cambiar tu nombre de usuario en la sección de configuración de la cuenta después de iniciar sesión en tu cuenta. Ten en cuenta que es posible que algunos cambios de nombre de usuario estén sujetos a ciertas restricciones o limitaciones.</p>
          </div>
        </div>
      </div>
      
    </div>
    
    </div> 
        
    
  );
};
