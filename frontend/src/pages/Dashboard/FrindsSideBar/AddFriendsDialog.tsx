import React, { useEffect, useState } from 'react';
import { validateEmail } from '../../../app/utils/validateors'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import InputWithLabel from '../../../app/components/InputWithLabel';
import CustomPrimaryBTN from '../../../app/components/CustomPrimaryBTN';
import { connect } from 'react-redux'
import { getActions } from '../../../app/store/actions/fiendsActions';

function AddFriendsDialog(props:any) {

    const { 
        isDialogOpen, 
        closeDialogHandler, 
        sendFriendInvitation = () => {} } = props
   

    const [ email, setEmail ] = useState('')
    const [ isFormValid, setInformValid] = useState(false)

    const handleSendInvitation = ()=> {
        sendFriendInvitation({
            email,
        })
    }

    const handleCLoseDialog = () => {
        closeDialogHandler()
        setEmail('')
    }

    useEffect( () => {
        setInformValid( validateEmail( email ) )
    }, [email, setInformValid])
    
    return (
        <Dialog
            open={isDialogOpen}
            onClose={handleCLoseDialog}
        >
            <DialogTitle >
                <Typography>Invite a Friend</Typography>
            </DialogTitle>

            <DialogContent>

                <DialogContentText>
                    <Typography>Enter e-mail adrres of friend which you would like to invite</Typography>
                </DialogContentText>

                <InputWithLabel 
                    label='Email'
                    type="email"
                    value={email}
                    setValue={setEmail}
                    placeHolder={'Email'}
                />
            </DialogContent>

            <DialogActions>
                <CustomPrimaryBTN 
                  onClick={handleSendInvitation}
                  disabled={!isFormValid}
                  label='Send'
                  additionalStyles={{
                    margin: "0px 15px 10px"
                  }}
                />
            </DialogActions>
        </Dialog>

            
    );
}

const mapActionsTopProps = (dispatch:any) => {
    return {
        ...getActions(dispatch)
    }
}
export default connect(null, mapActionsTopProps)(AddFriendsDialog);