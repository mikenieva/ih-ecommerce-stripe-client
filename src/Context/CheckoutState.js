import React from 'react'

import CheckoutContext from './CheckoutContext'

import axios from 'axios'


const CheckoutState = (props) => {

    // 1. INITIAL STATE

    // 2. REDUCERS

    // 3. FUNCIONES
    const processPayment = async (productId) => {

        // A. LLAMADA AL SERVER PARA OBTENER LA SESIÓN COMPLETA DE STRIPE
        console.log("Estado Global:", productId)

        const res = await axios.post("http://localhost:3005/checkout", {
            productId
        })

        // B. RETORNAR SOLAMENTE LA URL DE CHECKOUT
        const stripeUrlSession = res.data.data.url

        return stripeUrlSession

    }

    // 4. RETORNO

    return(
        <CheckoutContext.Provider 
            value={{
                processPayment
            }}
        >
            {props.children}
        </CheckoutContext.Provider>
    )

}

export default CheckoutState