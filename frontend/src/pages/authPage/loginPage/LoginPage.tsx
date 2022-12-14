import { useEffect, useState } from 'react';
import { validateLoginForm } from '../../../app/utils/validateors';
import { connect } from "react-redux"

import LoginPageFooter from './LoginPageFooter';
import LoginPageForm from './LoginPageForm';
import LoginPageHeader from './LoginPageHeader';
import AuthBox from '../../../app/components/AuthBox';
import { getActions } from '../../../app/store/actions/authActions';
import { useNavigate } from 'react-router-dom';

function LoginPage(props:any) {
    console.log(props)

    const { login } = props

    const history = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)
    
    useEffect( () => {
        setIsFormValid(validateLoginForm(email, password))
    }, [email, password, setIsFormValid])

    const handleLogin = ()=>{

        const userDetail = {
            email,
            password
        }

        login(userDetail, history)
    }

    return (
        <AuthBox>
            <LoginPageHeader />
            <LoginPageForm 
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
            <LoginPageFooter 
                isFormValid={isFormValid}
                handleLogin={handleLogin}
            />
            
        </AuthBox>
    );
}

const mapActionsToProps = (dispatch:any) => {
    return { 
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(LoginPage);