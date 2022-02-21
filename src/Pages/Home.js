import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import LandingPage from '../Components/LandingPage';
import Products from '../Components/Products';
import { useDispatch } from 'react-redux';
import { login,logout } from '../Features/UserSlice';
import jwt_decode from "jwt-decode";
import { useSelector } from 'react-redux'

function Home() {

    const check = useSelector((state) => state.user.user)
    const dispatch = useDispatch();
    console.log("user is", check)

    var user=null;

    useEffect(() => {
        try {
            const accessToken = localStorage.getItem('user');
            var decodedToken = jwt_decode(accessToken);
            var user= (decodedToken.full_name)
            if (decodedToken) {
                dispatch(
                    login(
                        user
                    )
                );
            }

        }
        catch (e) {
            console.log("not logged in ")
        }
    },[])

    
    return (
        <div>
            <LandingPage/>
            <Products/>
        </div>

    );
}

export default Home;
