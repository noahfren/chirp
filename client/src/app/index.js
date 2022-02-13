import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "../header";
import Home from "../home";
import { ProvideAuth, useAuth } from "../common/hooks/useAuth";
import Login from "../login";
import Profile from "../profile";
import LoadingCover from "../common/LoadingCover";
import Signup from "../signup";

function App() {
    return (
        <ProvideAuth>
            <StyledApp>
                <BrowserRouter>
                    <Header />
                    <Content />
                    <StyledFooter />
                </BrowserRouter>
            </StyledApp>
        </ProvideAuth>
    );
}

function Content() {
    const auth = useAuth();
    return (
        <StyledContent>
            {auth.loading && <LoadingCover />}
            <Switch>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </StyledContent>
    );
}

const StyledFooter = styled.div`
    grid-row: 3;
    grid-column: 1 / -1;
    background-color: white;
    z-index: 1000;
`;

const StyledContent = styled.div`
    grid-row: 2;
    grid-column: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
`;

const StyledApp = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: grid;
    grid-template-rows: 70px 1fr 30px;
    grid-template-columns: 1fr minmax(500px, 2fr) 1fr;
`;

export default App;
