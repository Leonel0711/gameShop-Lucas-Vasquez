//Funcion para simular el retraso a la hora de pedir a una base de datos es lo mismo que fetchData , pero este es para el ItemDetailContainer
function getData(time, task) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(task);
        }, time);
    })
}
export default getData