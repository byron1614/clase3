const button = document.querySelector('button');

const funcionClick = () => {
    console.log('hicieron click')
}

const funcionEnter = () => {
    console.log('El mouse entro')
}

const funcionSalir = () => {
    console.log('El mouse salio')
}


// button.onclick = funcionClick
// button.onmouseenter = funcionEnter


button.addEventListener('click',funcionClick);
button.addEventListener('mouseenter', funcionEnter);
button.addEventListener('mouseleave', funcionSalir);


const randomColor = (number) => {
    return Math.floor(Math.random() * number + 1);
 }
 
 button.addEventListener('click', (e) => {
     document.body.style.backgroundColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
 });