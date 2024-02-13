import { NavLink, Link } from 'react-router-dom'  // Importamos los componentes <NavLink /> y <Link /> desde la carpeta node_modules
import "./styles/NavBar.css"



export const Navbar = () => {

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/"> {/* El componente <Link /> es un componente que nos permite crear enlaces dentro de nuestra aplicación. */}
            
          </Link>
        </div>
        <ul>
          <li className='navIni'>
            <NavLink to="/">Inicio</NavLink> {/* El componente <NavLink /> es un componente que nos permite crear enlaces dentro de nuestra aplicación. */}{/* La diferencia entre <NavLink /> y <Link /> es que <NavLink /> nos permite agregar estilos a los enlaces cuando estos se encuentran activos. agregando la clase active. */}
          </li>
          <li>
            <NavLink to="/QueSonLosClanes">¿Qué son los Clanes?</NavLink> {/* A diferencia de los enlaces <a> de HTML, los enlaces de react-router-dom@6 no recargan la página. */}
          </li>
          <li>
            <NavLink to="/PreguntasFrecuentes">Preguntas Frecuentes</NavLink> {/* En los Link y NavLink usamos el atributo 'to' para indicar a donde queremos que nos lleve el enlace, en este caso a la ruta '/productos'. */}
          </li>
          <li>
            <NavLink to="/Equipo">Equipo</NavLink> {/* En los anchor tags de HTML '<a></a>' usamos el atributo 'href' para indicar a donde queremos que nos lleve el enlace, como vemos aquí no usamos el atributo 'href' sino el atributo 'to'. */}
          </li>
          <li>
            <NavLink to="/RegistroInicio">Registro/Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

