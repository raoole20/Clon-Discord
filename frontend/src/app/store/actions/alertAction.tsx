export const alertAction = {
    SHOW_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
    CLOSE_ALERT_MESSAGE: "ALERT.CLOSE_ALERT_MESSAGE"
}

export const getActions = (dispatch:any) => {
    return {
        openAlertMessage: (content:any) => dispatch( openAlertMessage(content)),
        closeAlertMessage: () => dispatch(closeAlertMessage(),
        )
    }
}

export const openAlertMessage = (content:any) => {
    return {
        type: alertAction.SHOW_ALERT_MESSAGE,
        content
    }
}

export const closeAlertMessage = () => {
    return {
        type: alertAction.CLOSE_ALERT_MESSAGE
    }
}