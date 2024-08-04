const h1 = document.getElementById('h1');
const button = document.getElementById('button');
const h3 = document.getElementById('h3');
const body = document.querySelector('body');

let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();

function funnyFunction() {
    h3.innerText = "";
    h1.innerText = 'Click to get a local time Message';
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
button.addEventListener("click", function(){
    if(hour >=0 && hour< 12){
        console.log('bruh');
        h3.style.color= "yellow";
        h3.innerText = 'GOOD MORNING!';
    }else if(hour >=12 && hour < 17){
        h3.innerText = 'GOOD AFTERNOON!';
    }else if(hour >=17 && hour < 19){
        h3.innerText = 'GOOD EVENING!';
    }else{
        h3.innerHTML = 'GOOD NIGHT!';
    }
    h1.innerText = `Current time: ${hour}:${minute}`;
    body.style.backgroundColor = getRandomColor();
    button.style.backgroundColor = getRandomColor();
    setTimeout(funnyFunction, 5000);
})