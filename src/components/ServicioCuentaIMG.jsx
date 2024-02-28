import { useContext } from "react"
import { clanesContext } from "../context/clanes/clanesContext"

export const ServicioCuentaIMG = ({nombreCuenta,imagenUrl,_id}) => {
    const {selectServiceId} = useContext (clanesContext)
    const selectService = () => {
        selectServiceId (_id)
    }

return(
    <div className="servicio" onClick={selectService}>
        <img src={imagenUrl}/>
   
        
    </div>

)



}