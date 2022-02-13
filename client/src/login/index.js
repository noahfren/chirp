import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import LoadingCover from "../common/LoadingCover";

import { useAuth } from "../common/hooks/useAuth";

function Login() {
    const [userNameInput, setUserNameInput] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [passwordInput, setPasswordInput] = useState("");

    const auth = useAuth();
    const history = useHistory();

    // Log out w/ current user on login page load
    useEffect(() => {
        if (auth.activeUser) {
            auth.logOut();
        }
    }, []);

    const handleUserNameChange = (e) => {
        setUserNameInput(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.logIn(userNameInput).then(() => {
            history.push("/");
        });
    };

    return <StyledLogin>
        {auth.loading && <LoadingCover/>}
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>Username</StyledLabel>
            <StyledInput type="text" onChange={handleUserNameChange}/>
            <StyledLabel>Password</StyledLabel>
            <StyledInput type="password" onChange={handlePasswordChange}/>
            <StyledSubmitInput type="submit" value="Sign In"/>
        </StyledForm>
    </StyledLogin>
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

const StyledLogin = styled.div`
    position: relative;
    height: 100%;
`;

export default Login;
