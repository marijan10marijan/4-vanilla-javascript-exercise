

const btns = document.querySelectorAll('#btn')
const cards = document.querySelectorAll('.element')

btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const btnCategory = btn.getAttribute('data-category')

        cards.forEach(card => {
            card.style.display = 'none'; 
        })

        if(btnCategory === 'all'){
            cards.forEach(card => {
                card.style.display = 'block'; 
            })
        }

        cards.forEach(card => {
            cardCategory = card.getAttribute('data-category')
            console.log(cardCategory)

            if(cardCategory.includes(btnCategory)){
                card.style.display = 'block';
            }
        })

    })
})