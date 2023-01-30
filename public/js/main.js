
//^ ABOUT THE BLOB SLIDE //
//^ ************************************************************/


const items = document.querySelectorAll('.blob');
const nbSlide = items.length;
const prev = document.querySelector('.left');
const next = document.querySelector('.right');
let count = 0;

//& Function for changing the blob next//

function slideNext(){
    items[count].classList.remove('active');
    
    
    if(count < nbSlide -1){
        
        count++;
    }else{
        count = 0;
    }
    colorChange(count);
    
    items[count].classList.add('active');
    console.log(count);
    }
//& ON CLICK for the function //
next.addEventListener('click', (slideNext));


//& Function for changing the blob previous//
function slidePrevious(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    }else{
        count = nbSlide -1;
    }
    colorChange(count);
    
    items[count].classList.add('active');
    console.log(count);
}
//& ON CLICK for the function //
prev.addEventListener('click', (slidePrevious));

//& Function Keypress to slide with the key board //
function keyPress(e){
    if(e.keyCode === 39){
        slideNext();
    }else if(e.keyCode === 37){
        slidePrevious();
    }
}
document.addEventListener('keydown' , keyPress);


//& Function colorChange to change the color of the logo and the arrows alonside the slide */
function colorChange(count) {
    switch(count) {
    case 0:
        thais.classList.add('darkGreen');
        thais.classList.remove('darkBrown');
        thais.classList.remove('middleGreen');
        document.querySelector('.left').classList.add('darkGreen')
        document.querySelector('.left').classList.remove('darkBrown');
        document.querySelector('.left').classList.remove('middleGreen');
        document.querySelector('.right').classList.add('darkGreen')
        document.querySelector('.right').classList.remove('darkBrown');
        document.querySelector('.right').classList.remove('middleGreen');
        break;
    case 1:
        thais.classList.add('darkBrown');
        thais.classList.remove('darkGreen');
        thais.classList.remove('middleGreen');
        document.querySelector('.left').classList.add('darkBrown')
        document.querySelector('.left').classList.remove('darkGreen');
        document.querySelector('.left').classList.remove('middleGreen');
        document.querySelector('.right').classList.add('darkBrown')
        document.querySelector('.right').classList.remove('darkGreen');
        document.querySelector('.right').classList.remove('middleGreen');
        
        break;
    case 2:
        thais.classList.add('middleGreen');
        thais.classList.remove('darkBrown');
        thais.classList.remove('darkGreen');
        document.querySelector('.left').classList.add('middleGreen')
        document.querySelector('.left').classList.remove('darkBrown');
        document.querySelector('.left').classList.remove('darkGreen');
        document.querySelector('.right').classList.add('middleGreen')
        document.querySelector('.right').classList.remove('darkBrown');
        document.querySelector('.right').classList.remove('darkGreen');
        break;
    } 
}
  