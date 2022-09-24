import { createContext, useState } from "react";

export const SesionContext = createContext();


function SesionContextProvider({ children }) {
    const [user, setUser] = useState();

    window.onload = () => {
        if (localStorage.getItem('user') || sessionStorage.getItem('user')) {
            const dataUser = JSON.parse(localStorage.getItem('user') ? localStorage.getItem('user') : sessionStorage.getItem('user'))
            console.log(dataUser);
            setUser(dataUser);
        }
    }

    const setDateUser = (userData) => {
        setUser(userData);
    }
    const getUser = () => {
        return user
    }
    const removeUser = () => {
        setUser();
        localStorage.getItem('user') ? localStorage.removeItem('user') : sessionStorage.removeItem('user');
    }
    return (
        <SesionContext.Provider value={{ user, setDateUser, removeUser, getUser }}>
            {children}
        </SesionContext.Provider>
    )
}

export default SesionContextProvider