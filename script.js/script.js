
/*Cuando hago Click en  .button .nav TOGGLE 'activo */
const button = document.querySelector('.button')
const nav = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})