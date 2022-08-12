import { FiberManualRecord } from "@mui/icons-material";
import { Box } from "@mui/system";

function OnlineIndicator(props:any) {
    return (
        <Box
            sx={{
                color: '#3ba55d',
                display: "flex",
                alignItems: 'center',
                position: 'absolute',
                right: '10px'
            }}
        >
            <FiberManualRecord />
        </Box>
    );
}

export default OnlineIndicator;