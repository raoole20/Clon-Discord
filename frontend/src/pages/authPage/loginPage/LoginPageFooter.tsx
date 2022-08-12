import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CustomPrimaryBTN from '../../../app/components/CustomPrimaryBTN';
import RedirectInfo from '../../../app/components/RedirectInfo';

const getFormNotValidMessage = ()=>{
    return 'Enter e-mail address and password valid!'
}

const getFormValidMessage = ()=>{
    return 'Press to log-in!'
}


function LoginPageFooter(props: any) {
    const { handleLogin, isFormValid } = props

    const history = useNavigate()

    const handlerToRegisterPage = () => {
        history('/register')
    }

    return (
        <>
            <Tooltip
                title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
                <div>
                    <CustomPrimaryBTN
                        label="Login in"
                        additionalStyles={{ marginTop: '30px' }}
                        disabled={!isFormValid}
                        onClick={handleLogin}
                    />
                </div>
            </Tooltip>

            <RedirectInfo
                text="Need an account? "
                redirectText="Create an account"
                additionalStyles={{ marginTop: '10px' }}
                redirectHandler={handlerToRegisterPage}
            />
        </>
    );
}

export default LoginPageFooter;