import axios from 'axios'
import { logout } from './app/utils/auth'

const apiCliente = axios.create({
    baseURL:  'http://localhost:8080/api',
    timeout: 1000,
})

apiCliente.interceptors.request.use( (config:any) => {
    const userDetail = localStorage.getItem('user')

    if(userDetail){
        const token = JSON.parse(userDetail).token
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, (err) => {
    return Promise.reject(err)
})


// public route

export const login = async (data:any) => {
    try {
        const response:any = await apiCliente.post('/auth/login', data)
        return {
            error: false,
            response
        }
    } catch (error) {
        const exception:any = error
        return { 
            error: true, 
            exception
        }
    }
}

export const register = async (data:any) => {
    try {
        const response = await apiCliente.post('/auth/register', data)
        return {
            error: false,
            response
        }
    } catch (error) {
        return { 
            error: true, 
            exception: error
        }
    }
}

// secure route
const checkResponseCode = (exception: any) => {
    const responseCode = exception?.response?.status

    if(responseCode) {
        ( responseCode===401 || responseCode === 403 ) && logout()
    }
}

export const sendFriendsInvitation = async (data:any) => {
    try {
        return await apiCliente.post("/friend-invitation/invite", data)
    } catch (error) {
        checkResponseCode(error)
        return {
            error: true,
            exception: error
        }
    }
}

