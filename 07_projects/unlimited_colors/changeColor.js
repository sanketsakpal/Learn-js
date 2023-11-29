// generate random color 



const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let intervalId;
const startChangingColor = function () {
    if (!intervalId) {


        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
}
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}
document.getElementById('start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)