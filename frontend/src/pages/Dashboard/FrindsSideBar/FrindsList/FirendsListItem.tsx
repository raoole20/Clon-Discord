import {  Button, Typography } from '@mui/material';
import { connect } from 'react-redux';
import Avatar from '../../../../app/components/Avatar';
import { chatTypes, getActions, setChosenChatDetails } from '../../../../app/store/actions/chatActions';
import OnlineIndicator from './OnlineIndicator';


function FirendsListItem({ id = 0, username = '', isOnline = false, setChosenChatDetails }) {

    const handleChooseActioveConversation = () => {
        setChosenChatDetails({ id: id, name: username }, chatTypes.DIRECT)
    }

    return (
        <Button
            style={{
                width: '100%',
                height: "42px",
                marginTop: '10px',
                display: "flex",
                alignItems: "center",
                justifyContent: 'flex-start',
                textTransform: "none",
                color: 'black',
                position: 'relative'
            }}
            onClick={handleChooseActioveConversation}
        >
            <Avatar 
                username={username}
            />
            <Typography
              style={{
                marginLeft: "7px",
                fontWeight: 700,
                color: '#8e9297',
              }}
              variant="subtitle1"
              align='left'
            >
                {username}
            </Typography>

            { isOnline && <OnlineIndicator /> }

        </Button>
    );
}
const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}
export default connect(null, mapActionsToProps)(FirendsListItem);