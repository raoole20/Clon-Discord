import { Typography } from '@mui/material';

function LoginPageHeader() {
    return (
        <>
            <Typography variant='h5' sx={{color: "white"}}>
                Welcome Back!
            </Typography>
            <Typography sx={{color: "#b9bbbe"}}>
                We are happy tha yoy are with us!
            </Typography>
        </>
    );
}

export default LoginPageHeader;