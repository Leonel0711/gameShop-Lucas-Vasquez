import React from 'react'
import Login from './Login'
import { useParams } from "react-router-dom";
import Register from './Register';
function LoginContainer() {
    const { action } = useParams()
    return (
        <div className='fatherLogin'>
            {action === "login" && <Login />}
            {action === "register" && <Register />}
        </div >

    )
}

export default LoginContainer