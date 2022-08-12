import { Alert, Snackbar } from '@mui/material';
import { connect } from 'react-redux'

import { getActions } from '../store/actions/alertAction';

function AlertNotification(props:any) {
    const { showAlertMessage, closeAlertMessage, alertMessageContent } = props
    console.log(props)
    return (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: 'center'}}
          open={showAlertMessage}
          onClose={ () => closeAlertMessage() }
          autoHideDuration={6000}
        >
            <Alert severity='info'>{`${alertMessageContent}`}</Alert>
        </Snackbar>
    );
}

const mapStoreStateToProps = ({ alert={} }) => {
    return {
      ...alert,
    };
  };
  
  const mapActionsToProps = (dispatch:any) => {
    return {
      ...getActions(dispatch),
    };
  };
  
  export default connect(
    mapStoreStateToProps,
    mapActionsToProps
  )(AlertNotification);
  