import { useState } from "react";
import styled from "styled-components";

function Login() {
    const [userNameInput, setUserNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const handleUserNameChange = (e) => {
        setUserNameInput(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Form Submitted with username: ${userNameInput} and password: ${passwordInput}`);
    };

    return <StyledForm onSubmit={handleSubmit}>
    <StyledLabel>Username</StyledLabel>
    <StyledInput type="text" onChange={handleUserNameChange}/>
    <StyledLabel>Password</StyledLabel>
    <StyledInput type="password" onChange={handlePasswordChange}/>
    <StyledSubmitInput type="submit" value="Sign In"/>
  </StyledForm>
};

const StyledLabel = styled.label`
    font-size: 16px;
    width: 50%;
    text-align: left;
`;

const StyledInput = styled.input`
    margin: 5px;
    font-size: 16px;
    width: 50%;
`;

const StyledSubmitInput = styled(StyledInput)`
    width: 100px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Login;
