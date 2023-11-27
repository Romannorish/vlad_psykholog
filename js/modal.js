const openModal = document.querySelector('.form-btn');
const closeModal = document.querySelector('.modal-close');
const formModal = document.querySelector('.modal');

openModal.addEventListener('click', ()=>{
    formModal.classList.toggle('is-active')
})

closeModal.addEventListener('click', ()=>{
    formModal.classList.remove('is-active')
})



const menu = document.querySelector('.header_menu');
const openMenu = document.querySelector('.burger_svg');

openMenu.addEventListener('click',()=> {
    menu.classList.toggle('active')
})


const openSucsess = document.querySelector('.secsess');

openSucsess.addEventListener('click',()=> {
    openSucsess.classList.toggle('active')
})
