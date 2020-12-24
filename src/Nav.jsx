import React from "react";
import {NavLink} from "react-router-dom";


function Nav(){

    return(
        <>
            <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav m-auto">
                    <li class="nav-item active">
                    <NavLink  className="nav-link" exact activeClassName="active" to="/machstatz" >
                        Home
                    </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink  className="nav-link" exact activeClassName="" to="favourite" >
                            Favourite Planets
                        </NavLink>
                    </li>

                    </ul>
                </div>
            </nav>

            </div>
        </>
    );
}

export default Nav;