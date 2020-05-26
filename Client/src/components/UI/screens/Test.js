import React, { useContext, useEffect, useState } from 'react'
import axios from '../../../../node_modules/axios'
import api from '../../../api'
import { UserContext } from '../../services/UserContext'

export default function Test() {

  const { isAuth, setIsAuth } = useContext(UserContext)
 
  return (
    <div>
      <button onClick={() =>  setIsAuth(!isAuth)}>Click Me!</button>
      {isAuth ? "auth" : "no auth"}
    </div>
  )
}