import io from 'socket.io-client'
import { store } from '../app/store/store'
import { setPendingInvitations, setFriends, setOnlineUsers } from '../app/store/actions/friendsActions'
export const connectWithSocketServer = (userDetails:any) => {
   
    const { token } = userDetails

    let socket = io('http://localhost:8080/',{
        auth: {
            token: token,
        }
    })

    socket.on('connect', ()=> {
        console.log('succefully connected with socket.io server')
        console.log(socket.id)
    })

    socket.on("friends-invitations", (data) => {
        const { pendingInvitations } = data
        store.dispatch(setPendingInvitations(pendingInvitations))
    })

    socket.on("friend-list", (data) => {
        const { friends } = data
        store.dispatch( setFriends(friends))
    })

    socket.on('online-users', (data) => {
        const { onlineUsers } = data 

        store.dispatch(setOnlineUsers(onlineUsers))
    })
}