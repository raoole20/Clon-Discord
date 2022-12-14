import io from 'socket.io-client'
import { store } from '../app/store/store'
import { setPendingInvitations } from '../app/store/actions/fiendsActions'
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

    socket.on("firneds-invitations", (data) => {
        const { prendingInvitations } = data
        store.dispatch(setPendingInvitations(prendingInvitations))
    })
}