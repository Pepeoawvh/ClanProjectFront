import { NavLink, Link } from "react-router-dom"; // Importamos los componentes <NavLink /> y <Link /> desde la carpeta node_modules
import "./styles/NavBar.css";
import { useContext, useEffect, useRef, useState } from "react";
import { usersContext } from "../context/users/usersContext";

export const Navbar = () => {
  const { isAuth, user, logOut } = useContext(usersContext);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header>
      <nav ref={navRef}>
        <NavLink to="/">
          {" "}
          <div className="logo"></div>
        </NavLink>
        <ul className={`navItem ${isOpen && "open"}`}>
          <li>
            <NavLink className="navButton" to="/">
              Inicio
              {/* El componente <Link /> es un componente que nos permite crear enlaces dentro de nuestra aplicación. */}
            </NavLink>
          </li>
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
              Quiénes Somos
            </NavLink>
            {/* En los Link y NavLink usamos el atributo 'to' para indicar a donde queremos que nos lleve el enlace, en este caso a la ruta '/productos'. */}
          </li>

          <li>
            {isAuth ? (
              <>
                Bienvenido{" "}
                <NavLink className="navButton navItem" to="/Profile">
                  {" "}
                  {user.username}
                </NavLink>
                <button
                  className="logOut navItem"
                  id="logOutButton"
                  onClick={logOut}
                >
                  Salir
                </button>
              </>
            ) : (
              <NavLink className="navButton navItem" to="/RegistroInicio">
                Registro/LogIn
              </NavLink>
            )}
          </li>
        </ul>
        <div
          className={`navToggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};
