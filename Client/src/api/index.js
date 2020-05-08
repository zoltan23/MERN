import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createClient = payload => api.post(`/client`, payload)
export const getClientById = id => api.get(`/client/${id}`)
export const getClients = () => api.get(`/clients`)

const apis = {
    createClient,
    getClientById,
    getClients
}

export default apis