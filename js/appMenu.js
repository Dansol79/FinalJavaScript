const menu = document.querySelector('.navToggle');
const navMenu = document.querySelector('.menu'); 

menu.addEventListener('click', ()=>{
    navMenu.classList.toggle('navMenuVisible');

    if(navMenu.classList.contains('navMenuVisible')){
        menu.setAttribute('arial-label', 'cerrar menu');

    }else{
        menu.setAttribute('arial-label', 'abir menu')
    }
})