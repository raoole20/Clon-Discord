import { Typography } from "@mui/material";


function FriendsTitle(props:any) {
    return (
        <Typography
           sx={{
            textTransform: "uppercase",
            color: "#8e9297",
            fontSize: "14px",
            marginTop: "10px"
           }}
        >
         {props.title}
        </Typography>
    );
}

export default FriendsTitle;