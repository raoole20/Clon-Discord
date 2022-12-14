import { useState } from "react";
import CustomPrimaryBTN from "../../../app/components/CustomPrimaryBTN";
import AddFriendsDialog from "./AddFriendsDialog";


const additionalStyles = {
    marginLeft: "5px",
    width: "80%",
    height: "30px",
    background: "#3ba55d",
    marginTop: "10px"
}

function AddFrindButtom() {

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleOpneAddFrindDialog = ()=>{
        setIsDialogOpen(true)
    }

    const handleCloseAddFriendDialog = () => {
        setIsDialogOpen(false)
    }


    return (
        <>
            <CustomPrimaryBTN
                additionalStyles={additionalStyles}
                label="Add Friend"
                onClick={handleOpneAddFrindDialog}
            />

            <AddFriendsDialog 
                isDialogOpen={isDialogOpen}
                closeDialogHandler={handleCloseAddFriendDialog}
                handleCloseAddFriendDialog={handleCloseAddFriendDialog}
            />
        </>
    )
}

export default AddFrindButtom;