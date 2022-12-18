import { useState } from 'react';
import { Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { connect } from 'react-redux'
import { getActions } from '../../../../app/store/actions/friendsActions';

import Avatar from '../../../../app/components/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons'

function PendingInvitationListItem(props:any) {
    const { id, username, email, acceptFriendInvitation = () => {
        console.log('este no ejecuta nada')
    }, rejectFriendInvitation = () => {}} = props
    const [buttonDisabled, setButtonDiasabled] = useState(false)

    const handleAccept = () => {
        acceptFriendInvitation({id})
        setButtonDiasabled(true)
    }
    const handleReject = () => {
        rejectFriendInvitation({id})
        setButtonDiasabled(true)
    }
    return (

        <Tooltip
            title={email}

        >
            <div style={{
                width: '100%'
            }}>
                <Box
                    sx={{
                        width:"100%",
                        height: '42px',
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '10px'
                    }}
                >
                    <Avatar username={username} />
                    <Typography 
                        sx={{
                            marginLeft: '7px',
                            fontWeight: 700,
                            color: '#8e9297',
                            flexGrow: 1
                        }}
                    >{username}</Typography>
                    
                    <InvitationDecisionButtons 
                        disabled={buttonDisabled}
                        acceptInvitation={handleAccept}
                        rejectInvitation={handleReject}
                    />
                </Box>

            </div>
        </Tooltip>
    );
}

const mapActionsToProps = (dispatch:any) => ({
    ...getActions(dispatch)
})
export default  connect( null, mapActionsToProps )( PendingInvitationListItem );