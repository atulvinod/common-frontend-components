const carousel = document.querySelector('.carousel');
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

left.addEventListener('click', ()=>{
  scrollSlideToView(--slideIndex);  
  checkButtons()
})

right.addEventListener('click', ()=>{
  scrollSlideToView(++slideIndex);
  checkButtons();
})

function scrollSlideToView(index){
  slides[index].scrollIntoView({
    block:'nearest',
    behavior:'smooth',
    inline:'start'
  });
}

function checkButtons(){
  if(slideIndex <= 0){
    if(!left.classList.contains('hidden')){
      left.classList.add('hidden');
    }
  }else if(slideIndex >= slides.length-1){
    if(!right.classList.contains('hidden')){
      right.classList.add('hidden');
    }
  }else if(slideIndex > 0 && slideIndex < slides.length){
    if(left.classList.contains('hidden')){
      left.classList.remove('hidden')
    }
    if(right.classList.contains('hidden')){
      right.classList.remove('hidden');
    }
  }
}