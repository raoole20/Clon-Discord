import { Typography, useStepContext } from '@mui/material';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthBox from '../../../app/components/AuthBox';
import { getActions } from '../../../app/store/actions/authActions';
import { usePrompt } from '../../../app/utils/prompt';
import { validateRegister } from '../../../app/utils/validateors';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageInputs from './RegisterPageInputs';

function RegisterPage(props:any) {
    console.log(props)
    const { register } = props

    const history = useNavigate()
    
    const [ email, setEmail ] = useState("")
    const [ userName, setUserName ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ submit, setSubmit ] = useState(false)
    
    const [isFormValid, setIsFormValid] = useState(false)
    
    const isDirty:boolean = (email !== '' || userName !== '' || password !== '') && !submit
    
    usePrompt('You decide, do you want to exit?', isDirty);

    useEffect( () =>{
        setIsFormValid(validateRegister( email, password, userName ))
    }, [ email, userName, password, setIsFormValid])

    const handleRegister = async() => {
        setSubmit(true)
        await register({ email, password, username: userName}, history)
        setSubmit(false)
    }

    return (
        <AuthBox>
   
           <Typography
            variant="h5" 
            sx={{ color: "white" } }
           >
            Create an Account
           </Typography>

           <RegisterPageInputs 
            email={email}
            setEmail={setEmail}
            userName={userName}
            setUserName={setUserName}
            password={password}
            setPassword={setPassword}
           />

           <RegisterPageFooter  
            handleRegister={handleRegister}
            isFormValid={isFormValid}
           />
        </AuthBox>
    );
}

const mapActionsToProps = (dispatch:any) => {
    return { 
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(RegisterPage);