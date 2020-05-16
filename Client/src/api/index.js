import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createClient = payload => api.post(`/client`, payload)
export const getClientById = id => api.get(`/client/${id}`)
export const getClients = () => api.get(`/clients`)
export const signUpUser = payload => api.post(`/signup`, payload)
export const loginUser = payload => api.post(`/login`, payload)

const apis = {
    createClient,
    getClientById,
    getClients,
    signUpUser,
    loginUser
}

export default apis