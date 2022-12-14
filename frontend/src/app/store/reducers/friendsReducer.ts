import { friendsActions } from "../actions/fiendsActions";

const initState = {
    friends: [],
    pendingFriendsInvitations: [],
    onlineUsers: []
}

export const reducer = (state = initState, action: any) => {
    switch (action.type) {
        case friendsActions.SET_PENDING_FRIENDS_INVITATIONS:
            return {
                ...state,
                pendingFriendsInvitations: action.pendingFriendsInvitations
            }
        case friendsActions.SET_FRIENDS:
            return {
                ...state,
                friends: action.friends
            }
        case friendsActions.SET_ONLINE_USERS:
            return {
                ...state,
                onlineUsers: action.onlineUsers
            }
        default:
            return state;
    }
}