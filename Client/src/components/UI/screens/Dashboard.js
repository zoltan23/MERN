import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../../api/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'



export default function Dashboard() {

    const INITIAL_USER = {
        firstName: "",
        lastName: "",
        email: "",
        posts: [],
    }


    useEffect(() => {
        getClientsFromDb()
    }, [])


    let [records, setRecords] = useState(INITIAL_USER)

    const getClientsFromDb = async () => {
        axios.get('api/clients').then((res) => {
            const data = res.data
            console.log('data.data', data.data)
            setRecords({posts: data.data})
            console.log('records', records)
          }).catch((err) => {
            console.log('err', err)
          })
    }

   const emp = []
    return (
        <div>
            <ul>
                {emp.map(item =>
                    <li>
                        <div>
                            {item.name}
                        </div>
                        <div>
                        <FontAwesomeIcon className="fa-3x align" color="red" icon={faTrashAlt} />
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
