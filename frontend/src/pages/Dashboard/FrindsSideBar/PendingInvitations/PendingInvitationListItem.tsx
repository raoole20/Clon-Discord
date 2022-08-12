import { Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import Avatar from '../../../../app/components/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons'

function PendingInvitationListItem(props:any) {
    
    const { id, username, email, acceptFiend = () => {}, reject = () => {}} = props

    const [buttonDisabled, setButtonDiasabled] = useState(false)

    const handleAccept = () =>{
        acceptFiend({id})
        setButtonDiasabled(true)
    }
    const handleReject = () =>{
        reject({id})
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

export default PendingInvitationListItem;