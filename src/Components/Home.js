import React, {useContext} from 'react'

import CheckoutContext from '../Context/CheckoutContext'


export default function Home() {

    const ctx = useContext(CheckoutContext)

    const { processPayment } = ctx

    const products = [
        {
            id: "111",
            nombre: "Tacos de Birria",
            precio: 300,
            productId: "price_1Jmm88Eoe6qswn14o2Sil3xb"
        },
        {
            id: "112",
            nombre: "Tacos de Birria",
            precio: 500,
            productId: "price_1Jmm88Eoe6qswn14jaA1JG9q"
        }
    ]

    const handlePayment = async (event, productId) => {

        event.preventDefault()

        const stripeUrl = await processPayment(productId)

        // ESTA LÍNEA LO QUE HACE ES GENERAR UNA REDIRECCIÓN CUIDADA Y OBLIGADAA HACIA LA STRIPE URL
        return window.location.href = stripeUrl

    }

    return (
        <>
            <h1>Lista de Productos</h1>

            {
                products.map(element => {
                    return (
                        <>
                            <h2>{element.nombre}</h2>
                            <p>Precio: {element.precio}</p>
                            <button onClick={ (evt) => { handlePayment(evt, element.productId) } }>
                                Ir a pagar
                            </button>
                        
                        </>
                    )
                })
            }

        </>
    )
}
