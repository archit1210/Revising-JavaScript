function generateColor () {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

const body = document.querySelector('body')
let intervalId;

const startChagingColor = function () {
    if(!intervalId) {
      intervalId = setInterval(changeColor, 1000);
    }
    function changeColor() {
        body.style.backgroundColor = generateColor()
    }
}

const stopChagingColor = function () {
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click', startChagingColor)
document.querySelector('#stop').addEventListener('click', stopChagingColor)
