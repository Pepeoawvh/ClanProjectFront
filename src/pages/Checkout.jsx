import { PayPalButtons } from "@paypal/react-paypal-js"
import { CheckoutSuscripciones } from "../components/CheckoutSuscripciones"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";
import { useEffect, useState } from "react";
initMercadoPago(import.meta.env.VITE_ACCESS_MP_TOKEN);


export const Checkout = () => {

  const [preferenceId, setPreferenceId] = useState(null)


  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: suscripciones.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)
          }
        }
      ]
    })
  }

  const onApprove = async (data, actions) => {
    alert("Pago aprobado")
    const enviarOrden = await actions.order.capture()
    console.log(enviarOrden)
  }

  const obtenerPreferenceId = async () => {
    const data = await axios.post (`${import.meta.env.VITE_BACKENDURL}/payment/create-Preference` , {clanId,
      precio})
    
    setPreferenceId (data.data.id)
  }

  useEffect (() => {
    obtenerPreferenceId ()
  }, [])


  return (
    <>
      <h2>Checkout Page</h2>

      <ul>
        {
          suscripciones.map((producto) => (
            <CheckoutSuscripciones
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              cantidad={producto.cantidad}
            />
          ))
        }
      </ul>

      <h3>Total: $ {suscripciones.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)}</h3>


      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={(error) => console.log(error)}
        onCancel={(data) => console.log(data)}
      />

      <Wallet initialization={{ preferenceId: preferenceId }} 
              customization={{ texts: { valueProp: 'smart_option' } }} />


    </>
  )
}
