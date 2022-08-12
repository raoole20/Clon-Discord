import React from 'react';
import InputWithLabel from '../../../app/components/InputWithLabel';

function LoginPageForm(props:any) {

    const { email, setEmail, password, setPassword} = props

    return (
        <>
          <InputWithLabel 
            value={email}
            setValue={setEmail}
            label="E-mail"
            type="email"
            placeholder="Enter E-mail address"
            />  
          <InputWithLabel 
            value={password}
            setValue={setPassword}
            label="Password"
            type="password"
            placeholder="Enter E-mail address"
            />  
        </>
    );
}

export default LoginPageForm;