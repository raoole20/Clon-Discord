import { Button } from '@mui/material';
import React from 'react';

function CustomPrimaryBTN(props: any) {

    const { label, additionalStyles, disabled, onClick } = props

    return (
        <>
            <Button
                variant="contained"
                sx={{
                    bgcolor: "#5865f2",
                    color: "white",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: 500,
                    width: "100%",
                    heigth: "40px",
                }}
                style={additionalStyles && additionalStyles}
                disabled={disabled}
                onClick={onClick}>
                {label}
            </Button>
        </>
    );
}

export default CustomPrimaryBTN;