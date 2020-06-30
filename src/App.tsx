import React from "react";
import styled from 'styled-components';
import { theme } from './theme';
import { routes } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const AppContainer = styled.div`
  font-family: sans-serif;
  color: ${({theme}) => theme.colors.mainColor}
`;

const Routes = () => {
    return routes.map((route) => {
        return(
            <Route path={route.path} key={route.path}>
                { route.component }
            </Route>
        )
    })
};

const App: React.FC = () => {
    return(
        <AppContainer className="App" theme={theme}>
            <Router>
                <Switch>
                    { Routes() }
                </Switch>
            </Router>
        </AppContainer>
    )
};

export default App;
