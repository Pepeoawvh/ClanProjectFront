import { useReducer } from "react"
import { clanesContext } from "./clanesContext"
import { clanesReducer } from "./clanesReducer"
import axios from "axios"



export const ClanesProvider = ({ children }) => {
    const initialClanesState = {
        selectedService: null, 
        cupos:0,
        valor:null,
        nombreServicio: ""
    }

    const [state, dispatch] = useReducer(clanesReducer, initialClanesState)

    const selectServiceId = (id) => {
        dispatch({
            type: "SELECTSERVICE",
            payload: id,
        })
    }

    const obtenerServicio = async () => {
        const url = `${import.meta.env.VITE_BACKENDURL}/accounts/getAccountById/${state.selectedService}`;
        const {data} = await axios.get(url)
        console.log (data)
        dispatch({
            type: "ESTABLECERSERVICIO",
            payload: data,            
        })
    } 


    return (
        <clanesContext.Provider 
            value={{
                selectServiceId,
                obtenerServicio,
                isServiceSelected: state.selectedService,
                nombreServicio: state.nombreServicio,
                cuposServicio: state.cupos,
                valorServicio: state.valor,
            }}        
        >
            {children}
        </clanesContext.Provider>
    )
}