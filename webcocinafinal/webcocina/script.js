const burger= document.getElementById("burger");
const menu= document.getElementById("menu");
const header= document.getElementById("headerdiv")
burger.addEventListener('click',()=>{
menu.classList.toggle('show');
})


window.addEventListener("scroll", function(){
    header.classList.toggle("abajo",window.scrollY>0);
    let posicionHeader = header.getBoundingClientRect().top;
    let tamaño = window.innerHeight;

    
})
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('comida');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamaño = window.innerHeight;

    if(posicionObj1<tamaño){
        animacion.style.animation='mover 1s ease-out';
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('comida2');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamaño = window.innerHeight;

    if(posicionObj1<tamaño){
        animacion.style.animation='mover 1s ease-out';
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('comida3');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamaño = window.innerHeight;

    if(posicionObj1<tamaño){
        animacion.style.animation='mover 1s ease-out';
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('h2pres');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamaño = window.innerHeight;

    if(posicionObj1<tamaño){
        animacion.style.animation='mover2 1s ease-out';
    }
})


burgerclass.addEventListener('click',()=>{
    menu.classList.toggle('show');
    })
