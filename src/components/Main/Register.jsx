import React from 'react'
import { SesionContext } from "./SesionContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

function Register() {
    const [alerta, setAlerta] = useState(false);
    const [texto, setTexto] = useState("");
    const sesion = useContext(SesionContext)
    let navigate = useNavigate();
    //Validate the data and redirect to home
    const validateDates = () => {
        setAlerta(false);
        //Get all the data and Verify.
        const email = document.getElementById("email").value;
        const reemail = document.getElementById("re-email").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;
        const lastName = document.getElementById("lastName").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        const checkBoxData = document.getElementById('invalidCheck').checked;
        if ((email === reemail) && password && name && lastName && address && phone) {
            if (sesion.verifyRegister(email)) {
                sesion.CreateUserToDataBase(email, password, name, lastName, address, phone, checkBoxData)
                navigate("/gameShop-Lucas-Vasquez/", { replace: true });
            } else {
                setTexto("Ya exite una cuenta con ese mail")
                setAlerta(true);
            }
        } else {
            setTexto("Verifique haber llenado todos los datos correctamente");
            setAlerta(true);
        }
    }
    return (
        <div className='loginContainer '>
            <h1>Registrarse</h1>
            <form className="row g-3 needs-validation" noValidate>
                <div className="">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="mail" className="form-control" id="email" required />
                </div>
                <div className="">
                    <label htmlFor="re-email" className="form-label">Re-Email</label>
                    <input type="mail" className="form-control" id="re-email" required />
                </div>
                <div className="">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" required />
                </div>
                <div className="">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <div className="">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastName" required />
                </div>
                <div className="">
                    <label htmlFor="address" className="form-label">Direccion</label>
                    <input type="text" className="form-control" id="address" required />
                </div>
                <div className="">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" required />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Recordarme
                        </label>
                    </div>
                </div>
                {alerta && <div>
                    <p>{texto}</p>
                </div>}
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={(event) => {
                        event.preventDefault()
                        validateDates();
                    }}>Registrarse</button>
                </div>
            </form>
        </div >
    )
}

export default Register