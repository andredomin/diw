const burger = document.getElementById("burger");
const header= document.getElementById("main_header");
burger.addEventListener('click',()=>{
menu.classList.toggle('show');
})

window.addEventListener("scroll", function(){
    header.classList.toggle("abajo",window.scrollY>0);
    let posicionHeader = header.getBoundingClientRect().top;
    let tamaño = window.innerHeight;

    
})