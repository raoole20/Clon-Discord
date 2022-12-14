import * as api from '../../../api'
import { openAlertMessage } from "./alertAction"

export const friendsActions = {
    SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
    SET_PENDING_FRIENDS_INVITATIONS: "FRIENDS.SET_PENDING_friends_INVITATIONS",
    SET_ONLINE_USERS: "FRINEDS.SET_ONLINE_USERS"
}

export const getActions = (dispatch:any) => ({
    sendFriendInvitation: (data:any, closeDialogHandler:any) => dispatch(sendFriendInvitation(data, closeDialogHandler)),
    acceptFriendInvitation: (data:any, closeDialogHandler:any) => dispatch(acceptFriendInvitation(data)),
    rejectFriendInvitation: (data:any, closeDialogHandler:any) => dispatch(rejectFriendInvitation(data))
})

const sendFriendInvitation = (data:any, closeDialogHandler:any) => {
    return async (dispatch:any) => {
        const response:any = await api.sendFriendsInvitation(data)

        if( response.error ){
            dispatch(openAlertMessage(response.exception?.response?.data))
        }else{
            dispatch(openAlertMessage("Invitation has been seend!"))
            closeDialogHandler()
        }
    }
}

const acceptFriendInvitation = ( data:any) => {
    return async (dispatch:any) => {
        const response:any = await api.acceptFriendInvitation(data)

        if( response.error ){
            dispatch(openAlertMessage(response.exception?.response?.data))
        }else{
            dispatch(openAlertMessage("Invitation accepted!"))
        }
    }
}

const rejectFriendInvitation = ( data:any) => {
    return async (dispatch:any) => {
        const response:any = await api.rejectFriendInvitation(data)

        if( response.error ){
            dispatch(openAlertMessage(response.exception?.response?.data))
        }else{
            dispatch(openAlertMessage("Invitation reject!"))
        }
    }
}

export const setPendingInvitations = ( pendingFriendsInvitations:any) => ({
    type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    pendingFriendsInvitations
})

export const setFriends = ( friends: any ) => ({
    type: friendsActions.SET_FRIENDS,
    friends,
})