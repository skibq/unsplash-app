import React from "react";
import { routes } from './pages';
import { Layout } from './theme/layout';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

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
        <Router>
            <Layout>
                <Switch>
                    { Routes() }
                </Switch>
            </Layout>
        </Router>
    )
};

export default App;
