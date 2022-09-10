function getData(time, task) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(task);
        }, time);
    })
}
export default getData