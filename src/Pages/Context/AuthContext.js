import { createContext, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import * as React from 'react';
const AuthContext = createContext()

export default AuthContext;
export const AuthProvider = ({ children }) => {

    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

    useEffect(() => {
        const accessToken = localStorage.getItem('access');
        var decodedToken = jwt_decode(accessToken);
        setAuthTokens(decodedToken)
        console.log(authTokens)

        setUser(decodedToken['full_name'])
        console.log(user)
    }, [])

    return (
        <AuthContext.Provider value={{ 'name': user }}>
            {children}
        </AuthContext.Provider>
    )
}