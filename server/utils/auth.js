import cookie from 'cookie'
import Router from 'next/router'

export function handlelogin(token) {
    cookie.set('token', token)
    Router.push('/account')
}

