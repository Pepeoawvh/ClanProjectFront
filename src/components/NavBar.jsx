import { NavLink, Link } from "react-router-dom"; // Importamos los componentes <NavLink /> y <Link /> desde la carpeta node_modules
import "./styles/NavBar.css";
import { useContext } from "react";
import { usersContext } from "../context/users/usersContext";

export const Navbar = () => {
  const { isAuth, user, logOut } = useContext(usersContext);

  return (
    <header>
      <nav>
        <NavLink to="/">
          <div className="logo"></div>
          {/* El componente <Link /> es un componente que nos permite crear enlaces dentro de nuestra aplicación. */}
        </NavLink>

        <ul>
          <li>
            <NavLink className="navButton" to="/QueSonLosClanes">
              ¿Qué son los Clanes?
            </NavLink>
            {/* A diferencia de los enlaces <a> de HTML, los enlaces de react-router-dom@6 no recargan la página. */}
          </li>
          <li>
            <NavLink className="navButton" to="/PreguntasFrecuentes">
              Preguntas Frecuentes
            </NavLink>
            {/* En los Link y NavLink usamos el atributo 'to' para indicar a donde queremos que nos lleve el enlace, en este caso a la ruta '/productos'. */}
          </li>

          <li>
            <NavLink className="navButton" to="/QuienesSomos">
              Quienes Somos
            </NavLink>
            {/* En los Link y NavLink usamos el atributo 'to' para indicar a donde queremos que nos lleve el enlace, en este caso a la ruta '/productos'. */}
          </li>

          <li className="navRegistro">
            {isAuth ? (
              <>
                Bienvenido <NavLink to="/Profile"> {user.username}</NavLink>
                <button className="logOut" id="logOutButton" onClick={logOut}>
                  Salir
                </button>
              </>
            ) : (
              <NavLink className="navButton" to="/RegistroInicio">
                Registro/Inicio
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
