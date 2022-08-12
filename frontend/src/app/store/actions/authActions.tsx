import * as api from '../../../api'
import { openAlertMessage } from './alertAction'

export const authActions = { 
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS'
}

export const getActions = (dispatch:any) =>{
    return { 
        login: (userDetail:any, history:any) => dispatch(login(userDetail, history)),
        register: (userDetail:any, history:any) => dispatch(register(userDetail, history)),
        setUserDetails: (userDetails:any) => dispatch(setUserDetails(userDetails))
    }
}
const setUserDetails = (userDetails:any) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails
    }
}

// this are the funtions will be return for getAction
const login = (user:any, history:any) =>{
    return async (dispatch:any) => {
        const response = await  api.login(user)

        if(response.error) {
            console.log(response?.exception?.response?.data)
            return dispatch(openAlertMessage(response?.exception?.response?.data))

        }else{
            const { data } = response?.response
            console.log(data)
            localStorage.setItem('user', JSON.stringify(data))

            dispatch( setUserDetails(data))
            history('/dashboard')
        }
    }
}

const register = (user:any, history:any) =>{
    return async (dispatch:any) => {
        const response:any = await api.register(user)

        if(response.error) {
             return dispatch(openAlertMessage(response?.exception?.response?.data))
        }else{
            const { data } = response?.response
            localStorage.setItem('user', JSON.stringify(data))

            dispatch( setUserDetails(data))
            history('/dashboard')
        }
    }
}
