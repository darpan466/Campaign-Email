import React from "react";
import Form from "./components/Form/Form.js";
import Main from "./components/Main/Main.js";
import Campaign from "./components/Campaign/Campaign.js";
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const App = () => {
    return (
        <center>
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/form" component={Form}/>
                    <Route exact path="/Campaign" component={Campaign}/>
                </Switch>
            </Router>        
        </center>
    );
};

export default App;

