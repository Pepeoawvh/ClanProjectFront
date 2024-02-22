import { useReducer } from "react";
import { usersContext } from "./usersContext";
import { usersReducer } from "./usersReducer";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UsersProvider = ({children}) => {
  const initialUserState  = {
    isAuthenticated: false,
    user: null,
  };
  const navegar = useNavigate();
  const [state, dispatch] = useReducer(usersReducer, initialUserState);

  const logIn = async (userData) => {
    const url = `${import.meta.env.VITE_BACKENDURL}/users/login`;
    const { data } = await axios.post(url, userData);
    localStorage.setItem("userToken", JSON.stringify(data.accessToken));
    console.log(data);
    const user = jwtDecode(data.accessToken);
    console.log(user);
    dispatch({
      type: "LOGIN/REGISTER",
      payload: user,
    });
  };
const logOut = () => {

  localStorage.removeItem("userToken")
  dispatch({
    type: "LOGOUT"
  })
  toast("Sesion cerrada");
  navegar('/')
}

  const register = async (registerData) => {
    const url = `${import.meta.env.VITE_BACKENDURL}/users/register`
    const {data} = await axios.post(url,registerData)
    localStorage.setItem("userToken", JSON.stringify(data.data));
    console.log(data);
    const user = jwtDecode(data.data);
    console.log(user);
    dispatch({
      type: "LOGIN/REGISTER",
      payload: user,
    });
  };



  return (
    <usersContext.Provider 
    value={{ 
      logIn,
      logOut,
      register,
      isAuth: state.isAuthenticated,
      user: state.user,
    }}>
      {children}
    </usersContext.Provider>
  );
};

