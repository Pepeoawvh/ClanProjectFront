import axios from 'axios'
import { useEffect, useState } from 'react'

export const ClanesAdministrados = ({id}) => {
    const [infoClanes, setInfoClanes] = useState(null)
    const obtenerClan = async () =>{
    const url = `${import.meta.env.VITE_BACKENDURL}/clan/get/${id}`
    const {data} = await axios.get(url)
    setInfoClanes(data.data)
    console.log(data.data)
 }  
  useEffect(()=> {
    obtenerClan()
  }, [])
 return (
    <div>
      <p>id Plataforma :{infoClanes?.clan.plataformaClan}</p>
      <p>Estado Clan :{infoClanes?.clan.estadoClan}</p>
      <p>Miembros :{infoClanes?.clan.miembros}</p>
      <p>Cupos Clan :{infoClanes?.clan.cuposClan}</p>
      <p>Tipo de Clan :{infoClanes?.clan.tipoClan}</p>
      <p>Fecha de creacion :{infoClanes?.clan.fechaCreacion}</p>
      

    </div>
  )
}
