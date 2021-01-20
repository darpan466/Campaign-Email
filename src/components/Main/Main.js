import React from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

const Main = () => {
    return (
        <form>
            <Link to="/form"><button>Email template</button></Link><br/>
            <Link to="/campaign"><button>Campaign</button></Link><br/>
        </form>
    );
    //
};
export default Main;
 