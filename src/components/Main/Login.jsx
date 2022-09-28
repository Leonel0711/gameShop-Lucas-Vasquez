import React from 'react'
import { useNavigate } from "react-router-dom";
import { SesionContext } from "./SesionContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { animateScroll as scroll } from 'react-scroll';
function Login() {
    scroll.scrollToTop();
    const sesion = useContext(SesionContext)
    const [alerta, setAlerta] = useState(false);
    const [texto, setTexto] = useState("");
    let navigate = useNavigate();

    const loginEvent = document.querySelectorAll(".login");
    loginEvent.forEach((input) => {
        input.onclick = () => {
            setAlerta(false);
        }
    })
    function validarDato(dato) {
        if (dato.trim() != "" && dato.trim != undefined) {
            return true;
        }
        return false;
    }
    //Validate the data and redirect to home
    function validate() {
        const emailAddress = document.getElementById("validationCustom01").value;
        const password = document.getElementById("validationCustom02").value;
        const checkBoxData = document.getElementById('invalidCheck').checked;
        if (validarDato(emailAddress) && validarDato(password)) {
            sesion.verifyLogin(emailAddress, password, checkBoxData).then(resolve => {
                if (resolve) {
                    navigate("/gameShop-Lucas-Vasquez/", { replace: true });
                } else {
                    setAlerta(true)
                    setTexto("Su mail o contraseña son incorrectos.")
                }
            })
        } else {
            setAlerta(true)
            setTexto("Verifique haber llenado todos los campos")
        }

    }
    return (
        <div className='loginContainer '>
            <h1>Iniciar Sesion</h1>
            <form className="row g-3 needs-validation" noValidate>
                <div className="">
                    <label htmlFor="validationCustom01" className="form-label">Email</label>
                    <input type="mail" className="form-control login" id="validationCustom01" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="">
                    <label htmlFor="validationCustom02" className="form-label">Password</label>
                    <input type="password" className="form-control login" id="validationCustom02" required />
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
                {alerta && <div>
                    <p className='alertRed'>{texto}</p>
                </div>}
                <div className='linkLogin-Register'>
                    <Link to="/gameShop-Lucas-Vasquez/user/register">
                        <p >No tengo una cuenta</p>
                    </Link>
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