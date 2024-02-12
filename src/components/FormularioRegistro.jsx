import { useState } from "react"
import "./styles/FormularioRegistro.css"

export const FormularioRegistro = () => {

  const initalRegisterData = {
    nombreCompleto: '',
    correo: '',
    contrasena: ''
  }
 
  const [registerData, setRegisterData] = useState(initalRegisterData)
 
  const onChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }
 
 
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(registerData)
  }
 
  return (
    <form className="formRegBanner" onSubmit={onSubmit}>
      <div className='regTitle'>RegistroInicio</div>


<div class="formReg">  
 
      <input
        className="formRegItem" 
        type="text"
        placeholder="Nombre Completo"
        value={registerData.nombreCompleto}
        name="nombreCompleto"
        onChange={onChange}
      /> {/**nombreCompleto */}
 
      <input
        className="formRegItem"
        type="email"
        placeholder="Email"
        value={registerData.correo}
        name="correo"
        onChange={onChange}
      /> {/**correo */}
 
      <input
        className="formRegItem"
        type="password"
        placeholder="Password"
        value={registerData.contrasena}
        name="contrasena"
        onChange={onChange}
      />{/**contraseña */}
   
      <button className="formRegItem" type="submit">Registrarse</button>
      </div>
    </form>
  )
}
 