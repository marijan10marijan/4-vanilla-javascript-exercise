

const btn = document.querySelector('.btn')
const modelData = document.querySelector('.data')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close-data')


const showModal = ()=>{
    modelData.style.display = 'block'; 
    overlay.style.display = 'block'; 
}

const closeModal = ()=>{
    modelData.style.display = 'none'; 
    overlay.style.display = 'none'; 
}


closeBtn.addEventListener('click', closeModal)
btn.addEventListener('click', showModal)
