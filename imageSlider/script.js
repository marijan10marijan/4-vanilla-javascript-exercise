

const images = document.querySelectorAll('.images-container img')
const dots = document.querySelectorAll('.dot')

const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')

const imagesLength = images.length
let currentImage = 0;

images[currentImage].style.display = 'block'; 

const displayNone = ()=>{
    images.forEach(img => {
        img.style.display = 'none';
    })
}


const previousImage =()=>{
    displayNone();
    
    currentImage--;
    if(currentImage === -1){
        currentImage = imagesLength - 1;
    }
    images[currentImage].style.display = 'block'; 
}

const nextImage =()=>{
    displayNone();
    
    currentImage++;
    if(currentImage === imagesLength){
        currentImage = 0;
    }
    images[currentImage].style.display = 'block';
}


leftBtn.addEventListener('click', previousImage)
rightBtn.addEventListener('click', nextImage)


dots.forEach(dot => {
    dot.addEventListener('click', ()=>{
        images.forEach(img => {
            img.style.display = 'none';
            const imageAttribute = img.getAttribute('data-img')
            const dotAttribute = dot.getAttribute('data-img')

            if(dotAttribute.includes(imageAttribute)){
                img.style.display = 'block';
            }
        })
        
    })
})

