import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "../header";
import Home from "../home";
import { ProvideAuth } from "../common/hooks/useAuth";
import Login from "../login";
import Profile from "../profile";

function App() {
    return (
        <ProvideAuth>
            <StyledApp>
                <BrowserRouter>
                    <Header/>
                    <StyledContentContainer>
                        <Switch>
                            <Route path="/login">
                                <Login/>
                            </Route>
                            <Route path="/profile">
                                <Profile/>
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </StyledContentContainer>
                    <StyledFooter/>
                </BrowserRouter>
            </StyledApp>
        </ProvideAuth>
    );
}

const StyledFooter = styled.div`
    grid-row: 3;
    grid-column: 1 / -1;
    background-color: white;
    z-index: 1000;
`;

const StyledContentContainer = styled.div`
    grid-row: 2;
    grid-column: 2;
    overflow-y: scroll;
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
