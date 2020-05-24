import React,{ useContext }  from 'react'
import { UserContext } from '../../services/UserContext'

export default function Settings() {
     const { role } = useContext(UserContext)
    return(
        <div>
            {role}
            Settings!!!
        </div>
    )
}
