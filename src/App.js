import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard/dashboard";
import Footer from "./footer";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"; 
import Userlist from "./userlist";
import Usercreate from "./usercreate";
import Useredit from "./useredit";
import Products from "./products";
import Productsedit from "./productsedit";
import Productcreate from "./productcreate";
export default function App(){
    return <>
    <Router>
    <div id="wrapper">
    <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content"> 

                <Topbar></Topbar>
                <div className="container-fluid">
                    
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} exact={true}/>
                        <Route path="/users" component={Userlist} exact={true}/>
                        <Route path="/usercreate" component={Usercreate} exact={true}/>
                        <Route path="/useredit/:id" component={Useredit} exact={true}/>
                        <Route path="/products" component={Products} exact={true}/>
                        <Route path="/productcreate" component={Productcreate} exact={true}/>
                        <Route path="/productsedit/:id" component={Productsedit} exact={true}/>
                    </Switch>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
    </Router>
    </>
}