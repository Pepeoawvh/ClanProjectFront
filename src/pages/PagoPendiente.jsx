import React from 'react';
import "./styles/Pagos.css";

export const PagoPendiente = () => {
  const detalles = "Tu pago ha sido procesado correctamente.";

  return (
    <div className="container">
    <div className="contentpay">
      <h2 className="titulo">¡Pago Pendiente!</h2>
      <hr className="linea" />
      <div className="mensaje-container">
        <p className="mensajep">Gracias por tu compra. Tu transacción está pendiente.</p>
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

