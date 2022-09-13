//Funcion para simular el retraso a la hora de pedir a una base de datos.
let fetchData = (time, task) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(task);
        }, time);
    })
}

export default fetchData