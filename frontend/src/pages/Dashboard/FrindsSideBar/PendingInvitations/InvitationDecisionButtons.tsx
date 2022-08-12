import { Check, Clear } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';


function InvitationDecisionButtons(props:any) {
    return (
       <Box
        sx={{
            display: "flex"
        }}
       >
        <IconButton 
            style={{
                color: 'white',
            }}
            disabled={props.disabled}
            onClick={props.acceptInvitation}
        >
            <Check/>
        </IconButton>

        <IconButton 
            style={{
                color: 'white',
            }}
            disabled={props.disabled}
            onClick={props.rejectInvitation}
        >
            <Clear sx={{ color: 'red'}}/>
        </IconButton>
       </Box>
    );
}

export default InvitationDecisionButtons;