import React from 'react';
import "./styles/Pagos.css";

const PagoExitoso = () => {
  const detalles = "Tu pago ha sido procesado correctamente.";

  return (
    <div className="container">
      <div className="contentpay">
        <h2 className="titulo">¡Pago Exitoso!</h2>
        <hr className="linea" />
        <div className="mensaje-container">
          <p className="mensaje">¡Gracias por tu pago! Tu transacción se ha completado con éxito.</p>
        </div>
        <div className="detalles-container">
          <p className="detalles">{detalles}</p>
        </div>
        <div className="ayuda-container">
          <p className="ayuda">¿Necesitas ayuda? Contacta con nuestro equipo de soporte.</p>
        </div>
      </div>
    </div>
  );
};

export default PagoExitoso;
