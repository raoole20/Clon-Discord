import { useRef, useEffect } from "react";
import { styled } from '@mui/system'
import { connect } from "react-redux";
import MessagesHeader from './MessagesHeader'

const MainContainer  = styled('div')({
    height: "calc(100% - 60px)",
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})


const Messages = ({ chosenChatDetails, messages }:any) => {
  const name = chosenChatDetails.name
  console.log(name)
  return (
    <MainContainer>
        <MessagesHeader name={name} />
    </MainContainer>
  )
}
const mapStoreStateToProps = ({chat}) => {
    return {
        ...chat,
    }
}
export default  connect(mapStoreStateToProps)(Messages)
