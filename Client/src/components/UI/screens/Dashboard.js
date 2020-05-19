import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../../api/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Modal from '../reusable-components/Modal.js'


export default function Dashboard() {

    let [ documents, setDocuments ] = useState([])

    useEffect(() => {
        getDocumentsFromDb()
    }, [documents])

    const getDocumentsFromDb = async () => {
        const response = await api.getUsers()
        setDocuments(response.data.data)
    }

    const deleteDocument = async (id) => {
        await api.deleteUser(id)
        console.log('delete doc fired')
    }

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Delete User</th>
                </tr>
            </thead>
            <tbody>
                {documents.map((item, index) =>
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>
                            <FontAwesomeIcon className="fa-2x align"
                                data-toggle=""
                                data-target=""
                                color="red"
                                icon={faTrashAlt}
                                onClick={() => deleteDocument(item._id)} />
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
