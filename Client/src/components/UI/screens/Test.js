import React, { useContext, useEffect, useState } from 'react'
import axios from '../../../../node_modules/axios'
import api from '../../../api'
import { UserContext } from '../../services/UserContext'

export default function Test() {

  const { isAuth, setIsAuth, userData } = useContext(UserContext)
 
  return (
    <div>
      {userData.firstName}
    </div>
  )
}