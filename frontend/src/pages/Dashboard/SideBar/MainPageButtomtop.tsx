import { Button } from '@mui/material';
import { GroupOutlined } from '@mui/icons-material';

function MainPageButtomtop() {
    return (
        <Button
         style={{
            width: '45px',
            height: '48px',
            borderRadius:  "16px",
            margin: 0,
            padding: 0,
            minWidth: 0,
            marginTop: '10px',
            color: "white",
            backgroundColor: "#5865f2"
         }}
        >
            <GroupOutlined />
        </Button>
    );
}

export default MainPageButtomtop;
