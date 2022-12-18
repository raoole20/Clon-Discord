import { styled } from '@mui/system'
import { useEffect } from 'react'
import Messages from './Messenger/Messages'
import NewMessageInput from './NewMessageInput'


const Wrapper = styled('div')({
  flexGrow: 1
})

const MessageContent = ({ chosenChatDetails }: any) => {
  useEffect( ()=> {
    // TODO 
    // Fetching chat history from specific user id
  }, [chosenChatDetails])
  return (
    <Wrapper>
        <Messages/>
        <NewMessageInput />
    </Wrapper>
  )
}

export default MessageContent
