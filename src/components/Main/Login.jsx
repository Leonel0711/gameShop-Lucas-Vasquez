import React from 'react'
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from '../../utils/fireBase'
function Login() {
    async function validate() {
        let emailAddress = document.getElementById("validationCustom01").value;
        let password = document.getElementById("validationCustom02").value;
        const q = query(collection(db, "users"), where('mail', '==', emailAddress))
        const querySnapshot = await getDocs(q);
        const users = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
        }))
        console.log(users)
        const userValidate = users.find(user => user.password === password);
        console.log(userValidate)
        if (userValidate) {
            sessionStorage.setItem('user', JSON.stringify(userValidate))
        }

    }
    return (
        <div className='loginContainer '>
            <form className="row g-3 needs-validation" noValidate>
                <div className="">
                    <label htmlFor="validationCustom01" className="form-label">Email</label>
                    <input type="mail" className="form-control" id="validationCustom01" defaultValue="Mark" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="">
                    <label htmlFor="validationCustom02" className="form-label">Password</label>
                    <input type="password" className="form-control" id="validationCustom02" defaultValue="Otto" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to terms and conditions
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