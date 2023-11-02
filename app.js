const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');

document.addEventListener('click', (event)=>{
    event.preventDefault()
    boz()
})

function boz (){
    if(dino.classList != 'boz'){
        dino.classList.add('boz')
    }

    setTimeout( ()=>{
        dino.classList.remove('boz')
    }, 700)
}