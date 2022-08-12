import { styled } from "@mui/system";
import PendingInvitationListItem from './PendingInvitationListItem'
const DUMMY_Invitations = [
  {
    _id: '1',
    senderId: {
      username: 'Mark',
      email: 'dymmy@das.com'
    }
  },
  {
    _id: '2',
    senderId: {
      username: 'anthony',
      email: 'dymmy@das.com'
    }
  },
  {
    _id: '3',
    senderId: {
      username: 'ana',
      email: 'dymmy@das.com'
    }
  },
]


const MainContainer = styled('div')({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "center"

})

function PendingInvitations() {
    return (
        <MainContainer>
            {DUMMY_Invitations.map( invitation => {
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

export default PendingInvitations;