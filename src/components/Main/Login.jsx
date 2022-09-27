import React from 'react'
import { useNavigate } from "react-router-dom";
import { SesionContext } from "./SesionContext";
import { useContext } from "react";

function Login() {
    const sesion = useContext(SesionContext)
    let navigate = useNavigate();
    //Validate the data and redirect to home
    function validate() {
        const emailAddress = document.getElementById("validationCustom01").value;
        const password = document.getElementById("validationCustom02").value;
        const checkBoxData = document.getElementById('invalidCheck').checked;
        if (sesion.verifyLogin(emailAddress, password, checkBoxData)) {
            navigate("/gameShop-Lucas-Vasquez/", { replace: true });
        }
    }
    return (
        <div className='loginContainer '>
            <h1>Iniciar Sesion</h1>
            <form className="row g-3 needs-validation" noValidate>
                <div className="">
                    <label htmlFor="validationCustom01" className="form-label">Email</label>
                    <input type="mail" className="form-control" id="validationCustom01" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="">
                    <label htmlFor="validationCustom02" className="form-label">Password</label>
                    <input type="password" className="form-control" id="validationCustom02" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Recordarme
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={(event) => {
                        event.preventDefault()
                        validate();
                    }}>Log In</button>
                </div>
            </form>
        </div >
    )
}

export default Login