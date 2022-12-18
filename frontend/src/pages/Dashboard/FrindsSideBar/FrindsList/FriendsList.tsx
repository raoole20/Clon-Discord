import { styled } from "@mui/system";
import { connect } from "react-redux";
import FirendsListItem from "./FirendsListItem";

const MainContainer = styled('div')({
  flexGrow: 1,
  width: "100%"
})

const ckeckOnlineUsers = ( friends =[], onlineUsers = [] )=>{
  friends.forEach( f => {
    const isUserOnline = onlineUsers.find( user => user?.userId === f?.id)
    f.isOnline = isUserOnline ? true : false
  })
  return friends 
}

function FriendsList(props:any) {
    return (
        <MainContainer>
            {
              ckeckOnlineUsers(props.friends, props.onlineUsers).map( ( f:any ) => (
                <FirendsListItem 
                  username={f.username}
                  id={f.id}
                  key={f.id}
                  isOnline={f.isOnline}
                />
              ))
            }
        </MainContainer>
    );
}

const mapStoreStateToProps = (props:any)=> {
  return {
    ...
    props.friend
  }
}

export default connect(mapStoreStateToProps)(FriendsList);