import { NavLink, Link } from 'react-router-dom'  // Importamos los componentes <NavLink /> y <Link /> desde la carpeta node_modules
import "./styles/NavBar.css"



export const Navbar = () => {

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/"> {/* El componente <Link /> es un componente que nos permite crear enlaces dentro de nuestra aplicación. */}
            <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/306197414_488161779984090_5270107914798332018_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeG4AXW88w77AoNQBXxAQN_N57PkeyCFESjns-R7IIURKBTtL71M9z5eu_3aEVSGQ2A&_nc_ohc=XKVAImD2YnwAX98V38L&_nc_ht=scontent.flsc3-1.fna&oh=00_AfC0mjps66C_BVKijuUH45ozQqcHy_k7XutTcE1-3yCVrg&oe=65A7801D" alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
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

