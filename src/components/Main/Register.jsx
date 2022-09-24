import React from 'react'
import { db } from '../../utils/fireBase'
import { doc, setDoc, collection, getDocs, where, query } from "firebase/firestore";
import { SesionContext } from "./SesionContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
function Register() {
    const [alerta, setAlerta] = useState(false);
    const [texto, setTexto] = useState("");
    const sesion = useContext(SesionContext)
    let navigate = useNavigate();
    const validateDates = async () => {
        setAlerta(false);
        const email = document.getElementById("email").value;
        const reemail = document.getElementById("re-email").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;
        const lastName = document.getElementById("lastName").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        if ((email === reemail) && password && name && lastName && address && phone) {
            const q = query(collection(db, "users"), where('mail', '==', email))
            const querySnapshot = await getDocs(q);
            const [users] = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()
            }))
            if (!users) {
                const newUser = {
                    address: address,
                    lastName: lastName,
                    mail: email,
                    name: name,
                    password: password,
                    phone: phone
                }
                const newOrderRef = doc(collection(db, "users"))
                await setDoc(newOrderRef, newUser);
                const dateToSession =
                {
                    name: name,
                    mail: email,
                    phone: phone,
                    address: address,
                }
                sesion.setDateUser(dateToSession);
                const checkBoxData = document.getElementById('invalidCheck').checked;
                checkBoxData ? localStorage.setItem('user', JSON.stringify(dateToSession)) : sessionStorage.setItem('user', JSON.stringify(dateToSession));
                console.log("lo logro señor");
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