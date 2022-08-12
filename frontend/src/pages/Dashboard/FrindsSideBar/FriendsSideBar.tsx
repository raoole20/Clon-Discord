import { styled } from "@mui/system";
import AddFrindButtom from "./AddFrindButtom";
import FriendsTitle from "./FriendsTitle";
import FriendsList from "./FrindsList/FriendsList";
import PendingInvitations from "./PendingInvitations/PendingInvitations";

const MainContainer = styled('div')({
    width: "224px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2F3136",
})

function FrindsSideBar(props: any) {
    return (
        <MainContainer>
            <AddFrindButtom/>
            <FriendsTitle title="Private Messages" />
            <FriendsList />
            <FriendsTitle title="Invitations" />
            <PendingInvitations />
        </MainContainer>
    );
}

export default FrindsSideBar;