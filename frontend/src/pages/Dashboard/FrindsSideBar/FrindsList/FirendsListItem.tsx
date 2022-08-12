import {  Button, Typography } from '@mui/material';
import Avatar from '../../../../app/components/Avatar';
import OnlineIndicator from './OnlineIndicator';


function FirendsListItem({ id = 0, username = '', isOnline = false}) {
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

export default FirendsListItem;