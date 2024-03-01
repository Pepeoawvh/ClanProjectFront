import { useReducer } from "react"
import { clanesContext } from "./clanesContext"
import { clanesReducer } from "./clanesReducer"
import axios from "axios"



export const ClanesProvider = ({ children }) => {
    const initialClanesState = {
        selectedService: null, 
        cupos:0,
        valor:null,
        nombreServicio: "",
        tipoDeClan:null,
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


    const selectedClan = (tipoDeClan) => {
        console.log (tipoDeClan)
        dispatch({            
            type: "SELECTCLANTYPE",
            payload: tipoDeClan,
        })
    }
    const registerClan = async (registerData) => {
        const url = `${import.meta.env.VITE_BACKENDURL}/clan/create`
        const {data} = await axios.post(url,registerData)
        localStorage.setItem("userToken", JSON.stringify(data.data));
        console.log(data);
        const clan = jwtDecode(data.data);
        console.log(clan);
        dispatch({
          type: "REGISTRARCLAN",
          payload: clan,
        });
      };

    return (
        <clanesContext.Provider 
            value={{
                selectServiceId,
                obtenerServicio,
                selectedClan,
                registerClan,
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