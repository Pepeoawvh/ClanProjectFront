import { useContext, useState } from "react";
import "./styles/Formularios.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { usersContext } from "../context/users/usersContext";

export const FormularioLogIn = () => {
  const initialUserData = {
    email: "",
    password: "",
  };
const {logIn} = useContext(usersContext)
  const [userData, setUserData] = useState(initialUserData);
  const [isLoading, setIsLoading] = useState(false);
  const navegar = useNavigate();

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      logIn(userData)
      setIsLoading(false);
      setUserData(initialUserData);
      toast("Inicio de sesion exitoso");
      navegar("/")
    } catch (error) {
      toast.error(error.response.data.mensaje)
      console.log(error.response);
      setIsLoading(false);
      setUserData(initialUserData);
    }
  };

  return (
    <form className="formBanner" onSubmit={onSubmit}>
      <div className="formLogIn" id="formReg">
        {/**nombreCompleto */}
        <input
          className="formItem"
          type="email"
          placeholder="Email"
          value={userData.email}
          name="email"
          onChange={onChange}
        />{" "}
        {/**email */}
        <input
          className="formItem"
          type="password"
          placeholder="Password"
          value={userData.password}
          name="password"
          onChange={onChange}
        />
        {/**contraseña */}
        <button className="formItem formButton" id="botonLogIn" type="submit" disabled={isLoading}>
          {
            isLoading ? "Cargando..." : "Iniciar Sesion" // renderizado condicional
          }
        </button>
      </div>
    </form>
  );
};
