import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import HeaderStats from "components/Headers/HeaderStats.jsx";
import FooterAdmin from "components/Footers/FooterAdmin.jsx";

// views
import Project from 'views/Proyectos/Proyectos';

export default function Proyectos() {
return (
    <>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
            <AdminNavbar />
            {/* Header */}
            <HeaderStats />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
                <Route path="/project/proyectos" exact component={Project} />
                <Redirect from="/project" to="/project/proyectos" />
            </Switch>
            <FooterAdmin />
            </div>
        </div>
        </>
    );
}
