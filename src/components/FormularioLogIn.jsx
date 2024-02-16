import { useState } from "react";
import "./styles/Formularios.css";
import axios from "axios";

export const FormularioLogIn = () => {
  const initialUserData = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUserData);

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    console.log(import.meta.env.VITE_BACKENDURL);
    const url = `${import.meta.env.VITE_BACKENDURL}/users/login`;
    const {data} = await axios.post(url, userData);
    console.log(data);
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
        <button className="formItem formButton" id="botonLogIn" type="submit">
          Iniciar Sesion
        </button>
      </div>
    </form>
  );
};
