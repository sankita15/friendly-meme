import React from "react";
import GuestInvitation from './component/GuestInvitation'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/invite">
                <GuestInvitation />
            </Route>
        </Switch>
    </Router>
);

export default App;
