import { Typography } from "@mui/material"
import { connect } from "react-redux"


const ChosenLabelOption = ({ name }) => {
  return (
    <Typography sx={{ 
        fontsize: '16px',
        color: "#fff",
        fontWeight: "bold"
    }}>
      {name ? `${name}` : ''}
    </Typography>
  )
}

const mapStoreStateToProps = (state) => {
    return { 
        name: state.chat.chosenChatDetails?.name
    }
}

export default connect(mapStoreStateToProps)(ChosenLabelOption)
