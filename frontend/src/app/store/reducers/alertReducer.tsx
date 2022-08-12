import { alertAction } from "../actions/alertAction";

const initState = {
    showAlertMessage: false, 
    alertMessageContent: null
}

const reducer = (state = initState, action:any) => {
    switch (action.type) {
        case alertAction.SHOW_ALERT_MESSAGE :
            return {
                ...state,
                showAlertMessage: true,
                alertMessageContent: action.content
            }
        case alertAction.CLOSE_ALERT_MESSAGE :
            return {
                ...state,
                showAlertMessage: false,
                alertMessageContent: null,
            }
        default:
            return state;
    }
}

export default reducer