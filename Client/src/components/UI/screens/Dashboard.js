import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../../api/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'



export default function Dashboard() {

    let [documents, setDocuments] = useState([])

    useEffect(() => {
        getDocumentsFromDb()
    }, [])


    const getDocumentsFromDb = async () => {
        const response = await api.getClients()
        console.log('[me] response', response)
        setDocuments(response.data.data)
        console.log('records', documents)
    }

    return (
        <div>
            <ul>
                {documents.map(item =>
                    <li key={item._id}>
                        <div className="row h-100 justify-content-center align-items-center" >
                            <div className="col-sm-3">{item.firstName}</div>
                            <div className="col-sm-3">{item.lastName}</div>
                            <div className="col-sm-3">{item.email}</div>
                            <div className="col-sm-3">
                                <FontAwesomeIcon className="fa-3x align" color="red" icon={faTrashAlt} />
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
