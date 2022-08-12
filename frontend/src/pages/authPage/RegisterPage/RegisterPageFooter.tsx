import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CustomPrimaryBTN from '../../../app/components/CustomPrimaryBTN';
import RedirectInfo from '../../../app/components/RedirectInfo';

const getFormNotValidMessage = ()=>{
    return 'Enter e-mail address, password and UserName valid!'
}

const getFormValidMessage = ()=>{
    return 'Press to Register!'
}


function RegisterPageFooter(props: any) {
    const { handleRegister, isFormValid } = props

    const history = useNavigate()

    const handlerToRegisterPage = () => {
        history('/login')
    }

    return (
        <>
            <Tooltip
                title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
                <div>
                    <CustomPrimaryBTN
                        label="Register"
                        additionalStyles={{ marginTop: '12px' }}
                        disabled={!isFormValid}
                        onClick={handleRegister}
                    />
                </div>
            </Tooltip>

            <RedirectInfo
                text=""
                redirectText="Already have an account ? "
                additionalStyles={{ marginTop: '10px' }}
                redirectHandler={handlerToRegisterPage}
            />
        </>
    );
}

export default RegisterPageFooter;