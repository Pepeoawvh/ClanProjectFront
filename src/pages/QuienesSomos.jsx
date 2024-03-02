import React from 'react';
import './styles/QuienesSomos.css';
import { Link } from 'react-router-dom';

export const QuienesSomos = () => {
  return (
    <div className="backgroundContainer">
      <div className="quienesSomosContainer">
        <h1>Somos el equipo Estrella ⭐</h1>
        <p>Somos un grupo de estudiantes del Bootcamp de Desarrollo Web en la Universidad del Desarrollo (UDD), 
          nos hemos unido con la misión de democratizar el acceso a los servicios de streaming. 
          Nuestra pasión por la tecnología nos impulsa a desarrollar soluciones innovadoras que hagan 
          posible que más personas disfruten de contenido de calidad a precios accesibles, creando así una
          experiencia de streaming más inclusiva y equitativa para todos.</p>
        <div className="logoSomos"></div>
        <p>En las honduras de nuestro equipo yacen corazones comprometidos y mentes iluminadas, donde la pasión y la bondad danzan en perfecta armonía.</p>
        <div className="teamPhoto"></div>
        <p>Si deseas adentrarte en el mundo de nuestras creaciones y servicios, te invitamos a explorar nuestro universo. // PROXIMAMENTE EN <Link to="/proyectos">PROYECTO 6</Link>.</p>
      </div>
    </div>
  );
};

export default QuienesSomos;
