export const chatTypes = {
    DIRECT: "DIRECT",
    GRUPD: "GRUP",
}


export const chatActions = {
    SET_CHOSEN_CHAT_DETAILS: "CHAT.SET_CHOSEN_CHAT_DETAILS",
    SET_MESSAGE: 'CHAT.SET_MESSAGE',
    SET_CHAT_TYPES: "CHAT.SET_CHAT_TYPE"
}

export const getActions = (dispatch) => {
    return {
        setChosenChatDetails: (details, chatType) => {
            dispatch(setChosenChatDetails(details, chatType))
        }
    }
}

export const setChosenChatDetails = (chatDetails, type) => {
    return {
        type: chatActions.SET_CHOSEN_CHAT_DETAILS,
        chatTypes: type,
        chatDetails
    }
}

export const setMessage = (messages)=> {
    return {
        type: chatActions.SET_MESSAGE,
        messages
    }
} 