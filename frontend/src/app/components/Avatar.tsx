import { styled } from '@mui/system';
import React from 'react';

const AvatarPreview = styled('div')({
    height: '42px',
    width: '42px',
    background: '#5865f2',
    borderRadius: '42px',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 700,
    marginLeft: "5px",
    color: "white"

})

function Avatar({ username = "", large = false}) {
    return (
        <AvatarPreview
            style={large ? {height: '80px', width: '80px' } : null}
        >
            {username.substring(0,2)}
        </AvatarPreview>
    );
}

export default Avatar;