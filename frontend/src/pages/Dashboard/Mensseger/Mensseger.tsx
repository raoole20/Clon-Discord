import { styled } from '@mui/system';
import { connect } from 'react-redux';
import WelcomeMessage from './WelcomeMessage'
import MessageContent from './MessageContent'
const MainContainer = styled('div')({
    flexGrow: 1,
    backgroundColor: "#36393f",
    marginTop: "48px",
    display: "flex",
})

function Mensseger({ chosenChatDetails }:any) {
    return (
        <MainContainer>
            { !chosenChatDetails ? (<WelcomeMessage />): <MessageContent chosenChatDetails={chosenChatDetails} />}
        </MainContainer>
    );
}


const mapStoreStateToProps = ({ chat }:any) => {
    return {
        ...chat
    }
}

export default connect(mapStoreStateToProps)(Mensseger);