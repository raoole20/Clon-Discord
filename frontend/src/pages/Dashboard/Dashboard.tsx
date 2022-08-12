import { styled } from '@mui/system'
import { useEffect } from 'react';
import { connect } from 'react-redux'
import AppBar from './AppBar/AppBar';
import FrindsSideBar from './FrindsSideBar/FriendsSideBar';
import Mensseger from './Mensseger/Mensseger';
import SideBar from './SideBar/SideBar';

import { logout } from '../../app/utils/auth';
import { getActions } from '../../app/store/actions/authActions';
import { connectWithSocketServer } from '../../realtime/socketConnectio';

const Wrapper = styled('div')({
    width: "100%",
    height: "100vh",
    display: "flex"
})

function Dashboard(props:any) {

    useEffect(()=>{
        const userDetails = localStorage.getItem('user')

        if( !userDetails ) {
            logout()
        }else{
            props.setUserDetails(JSON.parse(userDetails))
            connectWithSocketServer(JSON.parse(userDetails))
        }
    }, [])

    return (
        <Wrapper>
            <SideBar />
            <FrindsSideBar />
            <Mensseger/>
            <AppBar />
        </Wrapper>
    );
}

const mapActionsToProps = (dis:any) => {
    return {
        ...getActions(dis)
    }
}
export default connect(null, mapActionsToProps)(Dashboard);