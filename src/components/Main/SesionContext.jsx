import { createContext, useState } from "react";
import { db } from '../../utils/fireBase'
import { doc, setDoc, collection, getDocs, where, query, } from "firebase/firestore";

export const SesionContext = createContext();


function SesionContextProvider({ children }) {
    const [user, setUser] = useState();
    //Event to get the data from Storage
    window.onload = () => {
        if (localStorage.getItem('user') || sessionStorage.getItem('user')) {
            const dataUser = JSON.parse(localStorage.getItem('user') ? localStorage.getItem('user') : sessionStorage.getItem('user'))
            console.log(dataUser);
            setUser(dataUser);
        }
    }
    //Verify the data from Login to know if the user exist
    const verifyLogin = async (emailAddress, password, checkBoxData) => {
        const q = query(collection(db, "users"), where('mail', '==', emailAddress), where("password", "==", password))
        const querySnapshot = await getDocs(q);
        const [users] = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
        }))
        transoformObjUser(users, checkBoxData)
        return users;
    }
    //Verify the data from Register to not use the same mail
    const verifyRegister = async (email) => {
        const q = query(collection(db, "users"), where('mail', '==', email))
        const querySnapshot = await getDocs(q);
        const [users] = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
        }))
        return users;
    }
    //Create an object with data of the user
    const CreateUserToDataBase = async (email, password, name, lastName, address, phone, checkBoxData) => {
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
        transoformObjUser(newUser, checkBoxData)
    }
    //Create a new Object with data to show or use to the order.
    const transoformObjUser = (user, checkBoxData) => {
        const newDateUser = {
            name: user.name,
            mail: user.mail,
            phone: user.phone,
            address: user.address,
        }
        setDateUser(newDateUser);
        checkBoxData ? localStorage.setItem('user', JSON.stringify(newDateUser)) : sessionStorage.setItem('user', JSON.stringify(newDateUser));
    }
    //Set the date of user
    const setDateUser = (userData) => {
        setUser(userData);
    }
    //Remove all data of user
    const removeUser = () => {
        setUser();
        localStorage.getItem('user') ? localStorage.removeItem('user') : sessionStorage.removeItem('user');
    }
    return (
        <SesionContext.Provider value={{ user, setDateUser, removeUser, CreateUserToDataBase, verifyRegister, verifyLogin, transoformObjUser }}>
            {children}
        </SesionContext.Provider>
    )
}

export default SesionContextProvider