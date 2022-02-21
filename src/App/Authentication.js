import React from 'react';
import axios from 'axios';


const API_URL = 'http://127.0.0.1:8000/api/account/';



class AuthService {

    login(username, password) {
        return axios.post(API_URL+'token/', {
            email: username,
            password: password
        }).then((response) => {
            if (response.data) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            console.log("Logged in successfully")
            console.log(response.data)
            return response.data
        }).catch((err) => {
            console.log(err)
        })

    }
    logout() {
        localStorage.removeItem("user");
        



    }
    register(first_name, last_name, email, password) {
        return axios.post(API_URL + 'signup/', {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        }).then((response) => {
            console.log(response.data)
        })
    }
}

export default new AuthService();
