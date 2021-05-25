import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Proyectos from 'layouts/Proyectos'
import Index from 'views/Index';

// views without layouts
// import Landing from "views/Landing.js";
// import Profile from "views/Profile.js";

function App() {
    return (
        <Router>
        <Switch>
            {/* add routes with layouts */}
            <Route path="/auth" component={Auth} />
            <Route path="/admin" component={Admin} />
            <Route path="/project" component={Proyectos} />
            <Route path="/" exact component={Index} /> 

            {/* add routes without layouts */}
            {/* <Route path="/landing" exact component={Landing} />
            <Route path="/profile" exact component={Profile} /> */}
            {/* add redirect for first page */}
            <Redirect from="*" to="/" />
        </Switch>
        </Router>
    );
    }

export default App;
