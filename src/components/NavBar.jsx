import { NavLink, Link } from "react-router-dom"; // Importamos los componentes <NavLink /> y <Link /> desde la carpeta node_modules
import "./styles/NavBar.css";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="/">
          
            <NavLink to="/">
            <div className="logo"></div>
              {" "}
              {/* El componente <Link /> es un componente que nos permite crear enlaces dentro de nuestra aplicación. */}
            </NavLink>
          
        </a>
        <ul>

          <li>
            <NavLink to="/QueSonLosClanes">¿Qué son los Clanes?</NavLink>{" "}
            {/* A diferencia de los enlaces <a> de HTML, los enlaces de react-router-dom@6 no recargan la página. */}
          </li>
          <li>
            <NavLink to="/PreguntasFrecuentes">Preguntas Frecuentes</NavLink>{" "}
            {/* En los Link y NavLink usamos el atributo 'to' para indicar a donde queremos que nos lleve el enlace, en este caso a la ruta '/productos'. */}
          </li>
          <li className="navRegistro">
            <NavLink to="/RegistroInicio">Registro/Inicio</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
