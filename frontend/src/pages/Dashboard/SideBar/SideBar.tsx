import { styled } from "@mui/system";
import MainPageButtomtop from "./MainPageButtomtop";

const MainContainer = styled('div')({
    width: "72px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#202225",
})

function SideBar(props:any) {
    return (
        <MainContainer>
            <MainPageButtomtop />
        </MainContainer>
    );
}

export default SideBar;