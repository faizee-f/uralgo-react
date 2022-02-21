import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../App/Authentication'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Features/UserSlice'


function NavProfile(props) {
    const dispatch = useDispatch();
    const signout=()=>{
        dispatch(logout());
        AuthService.logout();

    }


    const user = props.user
    return (
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle" />
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <h6 class="dropdown-header">Hey {user}</h6>
                    <Link class="dropdown-item" to="/profile">Dashboard</Link>
                    <p class="dropdown-item" onClick={signout}>Log Out</p>
                </div>
            </li>

        </ul>

    )
}
export default NavProfile;
