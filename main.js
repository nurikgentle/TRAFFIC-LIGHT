const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');

let redd = prompt('PICK ONE OF THE TRAFFIC LIGHT COLORS!')

if(redd === 'red') {
    function redLight(){
        red.classList.add('active')
        setTimeout(() => {
            red.classList.remove('active')
        }, 1000);
    }
}

if(redd === 'yellow') {
        function yellowLight(){
        yellow.classList.add('active')
        setTimeout(() => {
            yellow.classList.remove('active')
        }, 1000);
    }
}

if(redd === 'green') {
    
    function greenLight(){
        green.classList.add('active')
        setTimeout(() => {
            green.classList.remove('active')
        }, 1000);
    }
}

function changeLights(){
    setTimeout(() => {
        redLight()
    }, );
    setTimeout(() => {
        greenLight()
    }, );
    setTimeout(() => {
        yellowLight()
    }, );
}




setInterval(changeLights ,500)