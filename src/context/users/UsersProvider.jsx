import { useReducer } from "react";
import { usersContext } from "./usersContext";
import { usersReducer } from "./usersReducer";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UsersProvider = ({ children }) => {
  const checkAuth = () => {
    const token = localStorage.getItem("userToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      return {
        isAuthenticated: true,
        user: decodedToken,
      };
    } else {
      return {
        isAuthenticated: false,
        user: null,
      };
    }
  };

  const initialUserState = {
    isAuthenticated: false,
    user: null,
  };
  const navegar = useNavigate();
  const [state, dispatch] = useReducer(
    usersReducer,
    initialUserState,
    checkAuth
  );

  const logIn = async (userData) => {
    const url = `${import.meta.env.VITE_BACKENDURL}/users/login`;
    try {
      const { data } = await axios.post(url, userData);
      localStorage.setItem("userToken", JSON.stringify(data.accessToken));
      console.log(data);
      const user = jwtDecode(data.accessToken);
      const expirationTime = user.exp * 1000;
      localStorage.setItem("tokenExpiration", expirationTime);
      console.log(user);
      dispatch({
        type: "LOGIN/REGISTER",
        payload: user,
      });
      navegar("/");
    } catch (error) {
      console.error(error);
      throw new Error("Error al iniciar Sesión");
    }
  };
  const logOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("tokenExpiration");
    dispatch({
      type: "LOGOUT",
    });
    toast("Sesion cerrada", {
      duration: 2000,
      position: "bottom-right",
      border: "1px solid black",
      style: { background: "black" },
    });
    navegar("/");
  };

  const register = async (registerData) => {
    const url = `${import.meta.env.VITE_BACKENDURL}/users/register`;
    const { data } = await axios.post(url, registerData);
    localStorage.setItem("userToken", JSON.stringify(data.data));
    console.log(data);
    const user = jwtDecode(data.data);
    console.log(user);
    dispatch({
      type: "LOGIN/REGISTER",
      payload: user,
    });
  };

  const updateUser = async (updateData) => {
    const url = `${import.meta.env.VITE_BACKENDURL}/users/edit/${
      state.user._id
    }`;
    const { data } = await axios.patch(url, updateData, {
      headers: {
        authorization: `Token ${JSON.parse(localStorage.getItem("userToken"))}`,
      },
    });
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
        updateUser,
        checkAuth,
        isAuth: state.isAuthenticated,
        user: state.user,
      }}
    >
      {children}
    </usersContext.Provider>
  );
};
