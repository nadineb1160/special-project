import React from "react";
import { Link, useLocation } from "react-router-dom";
import CheckInButton from "../Buttons/CheckInButton";
import SignOut from "../Buttons/signout"
import AddEvent from "../Buttons/addEvent"



function NavBar() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                <img className="navbar-brand" src="/footsteps2.png" alt="footsteps logo" style={{width: "60px"}}/>
            </Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                    <Link to="/activities" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                        Activities
                    </Link>
                    <Link to="/profile" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                        Profile
                    </Link>
                    <Link to="/login" className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>
                        Login
                    </Link>
                </ul>
                <SignOut/>
                <AddEvent/>
            </div>
            <CheckInButton/>
        </nav>
    )
}

export default NavBar;