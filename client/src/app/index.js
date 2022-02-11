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
            </BrowserRouter>
        </StyledApp>
    );
}

const StyledContentContainer = styled.div`
    grid-row: 2;
    grid-column: 2;
`;

const StyledApp = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 70px auto;
    grid-template-columns: 1fr 2fr 1fr;
`;

export default App;
