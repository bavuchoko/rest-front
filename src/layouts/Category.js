import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Java from "views/category/Java.js";
import Maps from "views/category/Maps.js";
import Settings from "views/category/Spring-Boot.js";
import Tables from "views/category/DataBase.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/category/java" exact component={Java} />
            <Route path="/category/maps" exact component={Maps} />
            <Route path="/category/spring-boot" exact component={Settings} />
            <Route path="/category/data-base" exact component={Tables} />
            <Redirect from="/category" to="/category/java" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
