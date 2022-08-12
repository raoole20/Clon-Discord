import React, { VFC } from 'react';

import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';

const ExitDialog: VFC<{
    message: string;
    open: boolean;
    onConfirm: Function;
    onClose: Function;
}> = ({ open, onConfirm, onClose, message }) => {
    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    return (
        <Dialog open={open} onClose={() => onClose()}>
            <DialogContent>{message}</DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()}>Cancel</Button>
                <Button onClick={handleConfirm}>Confirm</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ExitDialog;