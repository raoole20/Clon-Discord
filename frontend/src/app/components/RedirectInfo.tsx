import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const RedirectText = styled('span')({
    color: "#00aff4",
    fontWeight: 500,
    cursor: "pointer",
})
function RedirectInfo(props: any) {
    const { text, redirectText, additionalStyles, redirectHandler } = props

    return (
        <Typography 
            sx={{ color: '#72767d' }} 
            style={additionalStyles && additionalStyles} 
            variant="subtitle2"
        >
            {text}
            <RedirectText onClick={redirectHandler} >
                {redirectText}
            </RedirectText>
        </Typography>
    );
}

export default RedirectInfo;