import axios from '../../node_modules/axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createUser = payload => api.post(`/user`, payload)
export const getUserById = id => api.get(`/user/${id}`)
export const getUsers = () => api.get(`/users`)
export const signUpUser = payload => api.post(`/signup`, payload)
export const loginUser = payload => api.post(`/login`, payload)
export const deleteUser = id => api.delete(`/user/${id}`)

const apis = {
    createUser,
    getUserById,
    getUsers,
    signUpUser,
    loginUser,
    deleteUser
}

export default apis