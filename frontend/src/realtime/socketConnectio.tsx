import io from 'socket.io-client'

export const connectWithSocketServer = (userDetails:any) => {
   
    const { jwtToken } = userDetails
   
    let socket = io('http://localhost:8080/',{
        auth: {
            token: jwtToken,
        }
    })

    socket.on('connect', ()=> {
        console.log('succefully connected with socket.io server')
        console.log(socket.id)
    })
}