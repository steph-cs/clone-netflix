let slidePosition = [0,1,2,3,4];
let button= [false,true]
const slides = document.getElementsByClassName('carousel__item');
const buttons = document.getElementsByClassName('carousel-button');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }
  for (let position of slidePosition){
    slides[position].classList.add('carousel__item--visible');
  }
}

function updateButton(){
  for (let but of buttons){
      but.classList.remove('carousel__button--visible');
      but.classList.add('carousel__button--hidden');
  };
  for (let i=0;i<=1;i++){
    if (button[i]===true){
      buttons[i].classList.add('carousel__button--visible'); 
      buttons[i].classList.remove('carousel__button--hidden')
    }else{
      buttons[i].classList.add('carousel__button--hidden'); 
      buttons[i].classList.remove('carousel__button--visible')
    }
  }
}

function moveToNextSlide() {
  if (slidePosition[slidePosition.length -1] === totalSlides-2) {
    button[0]= true
    button[1]= false
    updateButton()
  } else if (slidePosition[0] >= 0) {
    button[0]= true
    button[1]= true
    updateButton()
  }
  if (slidePosition[slidePosition.length -1] != totalSlides-1) {
    slidePosition.shift();
    slidePosition.push(slidePosition[slidePosition.length -1]+1);
  }
  
  console.log(button)
  updateSlidePosition();
  
}

function moveToPrevSlide() {
  
  if (slidePosition[0] === 1) {
    button[0]= false
    button[1]= true
    updateButton()
  } else if(slidePosition[0] >= 0) {
    button[0]= true
    button[1]= true
    updateButton()
  }

  if (slidePosition[0] >= 1 ){
    slidePosition.pop();
    slidePosition.unshift(slidePosition[0]-1);
  }

  updateSlidePosition();
  
}
