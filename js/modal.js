const openModal = document.querySelector('.form-btn');
const closeModal = document.querySelector('.modal-close');
const formModal = document.querySelector('.modal');

openModal.addEventListener('click', ()=>{
    formModal.classList.toggle('is-active')
})

closeModal.addEventListener('click', ()=>{
    formModal.classList.remove('is-active')
})

