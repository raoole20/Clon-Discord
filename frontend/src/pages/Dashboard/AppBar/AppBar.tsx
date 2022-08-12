import { styled } from '@mui/system';
import DropDown from './DropDown'

const MainContainer = styled('div')({
    position: "absolute",
    right: "0",
    top: "0",
    height: "48px",
    borderBottom: "1px solid black",
    backgroundColor: "#36393f",
    width: "calc(100% - 326px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
})

function AppBar(props:any) {
    return (
        <MainContainer>
            <DropDown />
        </MainContainer>
    );
}

export default AppBar;