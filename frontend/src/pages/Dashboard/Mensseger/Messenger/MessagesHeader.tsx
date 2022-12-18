import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import Avatar from '../../../../app/components/Avatar'



const MainContainer = styled('div')({
    width: '98%',
    displayColumn: "column",
    marginTop: '10px'
})
const MessagesHeader = ({ name }: any) => {
    return (
        <MainContainer>
            <Avatar large username={name} />
            <Typography variant='h4' sx={{
                fontWeigth: 'bold',
                color: '#fff',
                marginLeft: '5px',
                marginRigth: '5px'
            }}
            >
                {name ? name : ""} 
            </Typography>
            <Typography sx={{ 
                color: '#b9bbbe',
                marginLeft: '5px',
                marginRigth: ' 5px'
            }}>
                This is the beginning of your conversation with {name}
            </Typography>
        </MainContainer>
    )
}

export default MessagesHeader
