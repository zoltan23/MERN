import cookie from 'js-cookie'
import { Redirect } from 'react-router-dom'

export function handleLogin(token) {
  //  cookie.set('token', token)
}

export function handleSignOut() {
  cookie.remove('token')
  console.log('[logout clicked]')
} 
