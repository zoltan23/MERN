import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../../api/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Modal from '../reusable-components/Modal.js'


export default function Dashboard() {

    let [ documents, setDocuments ] = useState([])
    const [ modalBool, setModalBool ] = useState(null)

    useEffect(() => {
        getDocumentsFromDb()
    }, [documents])

    const getDocumentsFromDb = async () => {
        const response = await api.getUsers()
        console.log('[me] response', response)
        setDocuments(response.data.data)
        console.log('records', documents)
    }

    const deleteDocument = async (id, modalBool) => {
        console.log('modalBool', modalBool)
        if(modalBool === true) {
         await api.deleteUser(id)
         setModalBool(null)
         console.log('user deleted')
        } 
        console.log('delete doc fired')
    }

    const getModalBool = (input) => {
        setModalBool(input)
    }    

    
    
    return (
        <div>
            <Modal setModalBool={getModalBool}/>
            <ul>
                {documents.map(item =>
                    <li key={item._id}>
                        <div className="row h-100 justify-content-center align-items-center" >
                            <div className="col-sm-3">{item.firstName}</div>
                            <div className="col-sm-3">{item.lastName}</div>
                            <div className="col-sm-3">{item.email}</div>
                            <div className="col-sm-3">
                                <FontAwesomeIcon className="fa-2x align"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                    color="red"
                                    icon={faTrashAlt}
                                    onClick={() => deleteDocument(item._id, modalBool)} />
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
