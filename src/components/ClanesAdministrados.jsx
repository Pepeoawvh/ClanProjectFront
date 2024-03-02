import axios from 'axios'
import { useEffect, useState } from 'react'

export const ClanesAdministrados = ({id}) => {
    const [infoClanes, setInfoClanes] = useState(null);
    const [mostrarTabla, setMostrarTabla] = useState(false);

    const obtenerClan = async () => {
        try {
            const url = `${import.meta.env.VITE_BACKENDURL}/clan/get/${id}`;
            const { data } = await axios.get(url);
            setInfoClanes(data.data);
            console.log(data.data);
        } catch (error) {
            console.error("Error al obtener el clan:", error);
        }
    };

    useEffect(() => {
        obtenerClan();
    }, []);

    const handleAdministrarClick = () => {
        setMostrarTabla(!mostrarTabla);
    };

    return (
<div className="container-custom4">
  <div className="header-custom4">
    <div>
    <img src="ruta_a_la_imagen.jpg" alt="Imagen" className="imagen-clan-admin" />
    </div>
    <div>3/5 miembros</div>
    <div>
      <button className="botondesplegable">Ayuda ℹ️</button>
    </div>
    <div>
      <button className="botondesplegable" onClick={handleAdministrarClick}>Administrar</button>
    </div>
  </div>
  {mostrarTabla && (
    <div className="hidden-table-custom4">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Info</th>
            <th>Tiempo</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre 1</td>
            <td>Usuario 1</td>
            <td>Info 1</td>
            <td>Tiempo 1</td>
            <td><button>Botón 1</button></td>
          </tr>
          <tr>
            <td>Nombre 2</td>
            <td>Usuario 2</td>
            <td>Info 2</td>
            <td>Tiempo 2</td>
            <td><button>Botón 2</button></td>
          </tr>
          <tr>
            <td>Nombre 3</td>
            <td>Usuario 3</td>
            <td>Info 3</td>
            <td>Tiempo 3</td>
            <td><button>Botón 3</button></td>
          </tr>
          <tr>
            <td>Nombre 4</td>
            <td>Usuario 4</td>
            <td>Info 4</td>
            <td>Tiempo 4</td>
            <td><button>Botón 4</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )}

</div>

/* 
  <div>
  <p>id Plataforma :{infoClanes?.clan.plataformaClan}</p>
  <p>Estado Clan :{infoClanes?.clan.estadoClan}</p>
  <p>Miembros :{infoClanes?.clan.miembros}</p>
  <p>Cupos Clan :{infoClanes?.clan.cuposClan}</p>
  <p>Tipo de Clan :{infoClanes?.clan.tipoClan}</p>
  <p>Fecha de creacion :{infoClanes?.clan.fechaCreacion}</p>
</div>
*/




    );
};
