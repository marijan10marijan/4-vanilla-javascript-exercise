
const menu = document.querySelector('.hamburger')
const lista = document.querySelector('.header__list')

const showList = ()=>{
    lista.classList.toggle('active'); 
    menu.classList.toggle('active__hamburger')
}

menu.addEventListener('click', showList)