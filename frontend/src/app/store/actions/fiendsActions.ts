import * as api from '../../../api'
import { openAlertMessage } from "./alertAction"

export const friendsActions = {
    SET_FRIENDS: 'FRINDS.SET_FRIENDS',
    SET_PENDING_FRIENDS_INVITATIONS: "FRIENDS.SET_PENDING_FIENDS_INVITATIONS",
    SET_ONLINE_USERS: "FRINEDS.SET_ONLINE_USERS"
}

export const getActions = (dispatch:any) => {
    return {
        sendFriendInvitation: (data:any, closeDialogHandler:any) => dispatch(sendFriendInvitation(data, closeDialogHandler))
    }
}

const sendFriendInvitation = (data:any, closeDialogHandler:any) => {
    return async (dispatch:any) => {
        const response:any = await api.sendFriendsInvitation(data)

        if( response.error ){
            dispatch(openAlertMessage(response.exception?.response?.data))
        }else{
            dispatch(openAlertMessage("INvitation has been sent!"))
            closeDialogHandler()
        }
    }
}