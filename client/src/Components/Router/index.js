import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../../App.css';
import {useUserContext} from "../../Utils/userContext"


import Home from "../../Pages/home";
import NoMatch from "../../Pages/noMatch";
import Profile from "../../Pages/profile";
import Activities from "../../Pages/activities";
import Signin from "../../Pages/signin";
import Signup from "../../Pages/signup";
import Edit from "../../Pages/edit"

import NavBar from "../NavBar";
import Footer from "../Footer";

function Router() {
    const {id} = useUserContext();
    console.log(id)
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                {id ?  
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/activities" component={Activities} />
                    <Route exact path="/activities/:id" component={Edit} />
                    <Route exact path="/profile" component={Profile} />
                    <Route component={NoMatch} />
                </Switch> :
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                    <Route component={NoMatch} />
                </Switch>}
                <Footer/>
            </div>
      </BrowserRouter>
    )
}

export default Router;