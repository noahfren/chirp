import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { StyledForm, StyledInput, StyledLabel, StyledSubmitInput } from "../common";
import { useAuth } from "../common/hooks/useAuth";
import Page from "../common/Page";

function Login() {
    const [usernameInput, setUsernameInput] = useState("");
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

    const handleUsernameChange = (e) => {
        setUsernameInput(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.logIn(usernameInput).then(() => {
            history.push("/");
        });
    };

    return (
        <Page>
            <StyledForm onSubmit={handleSubmit}>
                <StyledLabel>Username</StyledLabel>
                <StyledInput type="text" onChange={handleUsernameChange} />
                <StyledLabel>Password</StyledLabel>
                <StyledInput type="password" onChange={handlePasswordChange} />
                <StyledSubmitInput type="submit" value="Log In" />
                <div>{"Don't have an account? "}<Link to="/signup">Sign Up</Link></div>
            </StyledForm>
        </Page>
    );
}

export default Login;
