import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../../api'

export default function Test() {

  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    getClientsFromDb()
  }, [])

  const getClientsFromDb = () => {
    axios.get('api/clients').then((res) => {
      const data = res.data
      console.log('data', data)
    }).catch((err) => {
      console.log('err', err)
    })
  }

  const getFirstName = (e) => {
    console.log(e.target.value)
    setFirstName(e.target.value)
  }

  const handleSubmit = async () => {
    const lastName = "lastName"
    const payload = { firstName, lastName }
    console.log('payload', payload)
    await api.createClient(payload).then(res => {
      console.log('res', res)
    }).catch(err => {
      console.log('err', err)
    })
  }

  return (
    <div>
      <p></p>
      <input type="text" onChange={getFirstName} />
      <button onClick={handleSubmit}>Send to MongoDB</button>
    </div>
  )
}
