import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useState } from 'react'
import AuthService from '../App/Authentication'


import './css/SignIn.css'
function SignIn() {

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alerts, setAlert] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === '') {
            setAlert('username is required')
            console.log(alerts)
        }
        else if (password === '') {
            setAlert('password is required')
            console.log(alerts)
        }
        else {
            try {
                const user = AuthService.login(username, password)
                if (user) {
                    navigate('/')
                }

            }
            catch (err) {
                console.log(err);
            }

        }
    };
    return (
        <div>
            <div className="container mt-5">
                <div className="container text-center">
                    <div className="row m-5 no-gutters shadow-lg">

                        <div className="col-md-6 p-3 d-none d-md-block">
                            <img width='100%' src="https://source.unsplash.com/random/500x500/?computer" alt="" />
                        </div>
                        <div className="col-md-6 bg-white p-5">
                            <h5>Signin to your account</h5>
                            <form onSubmit={handleSubmit}>
                                <input type="text" className='form-control my-4' onChange={(e) => {
                                    setUsername(e.target.value);
                                    setAlert('')
                                }} placeholder="email" />
                                <input type="password" className='form-control my-4' onChange={(e) => {
                                    setPassword(e.target.value);
                                    setAlert('')
                                }} placeholder="password" />
                                <input type="submit" className='btn btn-dark w-100 font-weight-bold mt-2' value="Signin" />
                            </form>
                            <div class="sideline my-4">OR</div>
                            <div class="btn btn-danger my-3">Login with Google</div><br />
                            <div class="btn btn-success">Login with Facebook</div>

                            <div class="mt-5">
                                <p>Dont have an account ? <Link to='/signup'>Sign up</Link>  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignIn;
