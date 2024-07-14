import React from 'react';
import './styles/QuienesSomos.css';
import { Link } from 'react-router-dom';

export const QuienesSomos = () => {
  return (
    <div className="backgroundContainer">
      <div className="grid auto-rows-min text-center">
        <h1>Somos el equipo Estrella ⭐</h1>
        <p className='text-justify mx-5 mt-8 sm:mx-72'> Somos un grupo de estudiantes del Bootcamp de Desarrollo Web en la Universidad del Desarrollo (UDD), 
          nos hemos unido con la misión de democratizar el acceso a los servicios de streaming. 
          Nuestra pasión por la tecnología nos impulsa a desarrollar soluciones innovadoras que hagan 
          posible que más personas disfruten de contenido de calidad a precios accesibles, creando así una
          experiencia de streaming más inclusiva y equitativa para todos.</p>
        <div className="logoSomos"></div>
        <p className='text-justify mx-8 mb-8 sm:mx-72'> En las honduras de nuestro equipo yacen corazones comprometidos y mentes iluminadas, donde la pasión y la bondad danzan en perfecta armonía.</p>
        <div className="teamPhoto"></div>
        <p className='text-justify mx-4 mt-4 mb-4 sm:mx-72'>Si deseas adentrarte en el mundo de nuestras creaciones y servicios, te invitamos a explorar nuestro universo.</p>
      </div>
    </div>
  );
};

export default QuienesSomos;
