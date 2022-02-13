import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { StyledForm, StyledInput, StyledLabel, StyledSubmitInput } from "../common";
import { useAuth } from "../common/hooks/useAuth";
import Page from "../common/Page";

function Signup() {
    const [userNameInput, setUserNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const [displayNameInput, setDisplayNameInput] = useState("");

    const auth = useAuth();
    const history = useHistory();

    // Log out w/ current user on login page load
    useEffect(() => {
        if (auth.activeUser) {
            auth.logOut();
        }
    }, []);

    const handleUserNameChange = (e) => {
        setUserNameInput(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPasswordInput(e.target.value);
    };

    const handleDisplayNameChange = (e) => {
        setDisplayNameInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordInput !== confirmPasswordInput) {
            alert("password must match");
            return;
        }
        auth.signUp(userNameInput, passwordInput, displayNameInput).then(() => {
            history.push("/");
        });
    };

    return (
        <Page>
            <StyledForm onSubmit={handleSubmit}>
                <StyledLabel>Username</StyledLabel>
                <StyledInput type="text" onChange={handleUserNameChange} />
                <StyledLabel>Password</StyledLabel>
                <StyledInput type="password" onChange={handlePasswordChange} />
                <StyledLabel>Confirm Password</StyledLabel>
                <StyledInput type="password" onChange={handleConfirmPasswordChange} />
                <StyledLabel>Display Name</StyledLabel>
                <StyledInput type="text" onChange={handleDisplayNameChange} />
                <StyledSubmitInput type="submit" value="Sign Up" />
                <div>{"Already have an account? "}<Link to="/login">Log In</Link></div>
            </StyledForm>
        </Page>
    );
}

export default Signup;
