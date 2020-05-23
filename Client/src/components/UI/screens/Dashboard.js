import React, { useEffect, useState } from 'react'
import api from '../../../api/index.js'
import Table from '../reusable-components/Table'

export default function Dashboard() {

    let [ documents, setDocuments ] = useState([])

    useEffect(() => {
        getDocumentsFromDb()
    }, [])

    const getDocumentsFromDb = async () => {
        const response = await api.getUsers()
        setDocuments(response.data.data)
    }

    const handleDeleteItem = (id) => {
        let confirmDelete = window.confirm("Are you sure you want to delete me?")
        if (confirmDelete) {
            setDocuments(prevState => prevState.filter(doc => doc._id !== id))
            api.deleteUser(id).then(res => {
                setDocuments(prevState => prevState.filter(doc => doc.id !== id))
            })
        }
    }

    return (
        <Table documents={documents} deleteItem={handleDeleteItem} />
    )
}