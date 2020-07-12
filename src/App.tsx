import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { routes } from './pages/router';
import { Layout } from './theme/layout';
import "./theme/styles.scss"

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
