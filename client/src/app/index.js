import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "../header";
import Home from "../home";

function App() {
    return (
        <StyledApp>
            <BrowserRouter>
                <Header/>
                <StyledContentContainer>
                    <Switch>
                        <Route path="/profile">
                            <p>My Profile Page Here</p>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </StyledContentContainer>
                <StyledFooter/>
            </BrowserRouter>
        </StyledApp>
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
    grid-template-columns: 1fr 2fr 1fr;
`;

export default App;
