const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const btn = document.querySelector('.btn');

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

let asAlive = setInterval( ()=>{
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if(cactusLeft < 320 && cactusLeft > 250 && dinoTop >=170 ){
        alert("Yutqazdingiz, Do'stim")
    }
})