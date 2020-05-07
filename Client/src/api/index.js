import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createClient = payload => api.post(`/client`, payload)
export const getClientById = id => api.get(`/client/${id}`)

const apis = {
    createClient,
    getClientById
}

export default apis