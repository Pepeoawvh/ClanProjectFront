import { useReducer } from "react";
import { clanesContext } from "./clanesContext";
import { clanesReducer } from "./clanesReducer";
import axios from "axios";
import { toast } from "react-toastify";

export const ClanesProvider = ({ children }) => {
  const initialClanesState = {
    admin: null,
    selectedService: null,
    cupos: 0,
    valor: null,
    nombreServicio: null,
    tipoDeClan: null,
  };

  const [state, dispatch] = useReducer(clanesReducer, initialClanesState);

  const selectServiceId = (id) => {
    dispatch({
      type: "SELECTSERVICE",
      payload: id,
    });
  };

  const obtenerServicio = async () => {
    const url = `${import.meta.env.VITE_BACKENDURL}/accounts/getAccountById/${
      state.selectedService
    }`;
    const { data } = await axios.get(url);
    console.log(data);
    dispatch({
      type: "ESTABLECERSERVICIO",
      payload: data,
    });
  };

  const selectedClan = (tipoDeClan) => {
    console.log(tipoDeClan);
    dispatch({
      type: "SELECTCLANTYPE",
      payload: tipoDeClan,
    });
  };
  const registerClan = async (registerData, userId) => {
    const url = `${import.meta.env.VITE_BACKENDURL}/clan/create`;
    if (
      !userId ||
      !registerData.usuarioCredencialesClan ||
      !registerData.contrasenaClan ||
      !state.selectedService ||
      !state.cupos||
      !state.tipoDeClan
    ) {
      toast("Debes completar todos los datos", {
        duration: 2000,
        position: "bottom-right",
        border: "1px solid black",
        style: { background: "black" },
      })
     return
    }
    const bodyClan = {
      admin: userId,
      usuarioCredencialesClan: registerData.usuarioCredencialesClan,
      contrasenaClan: registerData.contrasenaClan,
      plataformaClan: state.selectedService,
      cuposClan: state.cupos,
      tipoClan: state.tipoDeClan,
    };
    const token = JSON.parse(localStorage.getItem('userToken'))
    const { data } = await axios.post(url, bodyClan, {
      headers: {
        'authorization': `Token ${token}`
      }
    });
    console.log(data)
    dispatch({
      type: "LIMPIARCLANES",
      payload: initialClanesState,
    });
  };
  const setClanAdmin = (id) => {
    dispatch({
      type: "ESTABLECERADMIN",
      payload: id,
    });
  };
  return (
    <clanesContext.Provider
      value={{
        selectServiceId,
        obtenerServicio,
        selectedClan,
        registerClan,
        setClanAdmin,
        isServiceSelected: state.selectedService,
        nombreServicio: state.nombreServicio,
        cuposServicio: state.cupos,
        valorServicio: state.valor,
      }}
    >
      {children}
    </clanesContext.Provider>
  );
};
