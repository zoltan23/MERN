import React, { useEffect } from 'react'
import api from '../../../api'

export default function Test() {
    //const id = '5eb2cbbf6f16e61d22e1c3de' 

    useEffect(() => {
        api.getClientById('5eb2cbbf6f16e61d22e1c3de').then(data =>
            console.log('data', data))
            
    })
         
    return (
        <div>
            <p></p>
           <input type="text" />
           <button>Send to MongoDB</button>
        </div>
    )
}
