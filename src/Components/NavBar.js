import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import NavProfile from '../Components/NavBar/NavProfile'
import NavAuth from '../Components/NavBar/NavAuth'

import { useSelector } from 'react-redux'



function NavBar() {


    useEffect(() => {
        try {
            const accessToken = localStorage.getItem('user');
            var decodedToken = jwt_decode(accessToken);
            var user= (decodedToken.full_name)
        }
        catch (e) {
            console.log("not logged in ")
        }
    },[])
    
    const user = useSelector((state) => state.user.user)
    return (
        <nav class="navbar sticky-top  navbar-expand-lg navbar-light bg-light px-5 px-5">
            <div class="container">
                <Link class="navbar-brand fw-bolder" to='/'>URALGO</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="#">Challenges</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Leaderboard</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/compiler">Compiler</Link>
                        </li>
                    </ul>

                    {user
                        ? <NavProfile user={user} />
                        : <NavAuth />
                    }
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
