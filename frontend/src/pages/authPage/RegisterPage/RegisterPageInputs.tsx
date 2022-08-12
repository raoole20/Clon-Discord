import React from 'react';
import InputWithLabel from '../../../app/components/InputWithLabel';

function RegisterPageInputs(props:any) {
    const { email, setEmail, userName, setUserName, password, setPassword } = props
    return (
        <>
            <InputWithLabel
              value={email}
              setValue={setEmail}
              label="E-mail address"
              type="email"
              placeholder="Enter e-mail adrress"
            />
            <InputWithLabel
              value={userName}
              setValue={setUserName}
              label="User Name"
              type="text"
              placeholder="Enter your User Name"
            />
            <InputWithLabel
              value={password}
              setValue={setPassword}
              label="Password"
              type="password"
              placeholder="Enter Password"
            />
        </>
    );
}

export default RegisterPageInputs;