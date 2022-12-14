import { styled } from "@mui/system";
import { connect } from "react-redux";
import PendingInvitationListItem from './PendingInvitationListItem'


const MainContainer = styled('div')({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "center"

})

function PendingInvitations(props:any) {
    return (
        <MainContainer>
            {props.pendingFriendsInvitations.map( (invitation:any) => {
              return (
                <PendingInvitationListItem 
                  key={invitation._id}
                  id={invitation._id}
                  username={invitation.senderId.username}
                  email={invitation.senderId.email}
                />
              )
            })}
        </MainContainer>
    );
}

const mapStoreStateToProps = (props:any)=> {
  return {
    ...
    props.friend
  }
}


export default connect(mapStoreStateToProps)(PendingInvitations);