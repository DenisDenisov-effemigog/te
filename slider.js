let slider = document.querySelector('.slider__list');
let a = document.querySelectorAll('.slider__item');
let prevBtn =document.querySelector('.prev__button');
let nextBtn =document.querySelector('.next__button'); 
let currentSlide = 0
let step;


prevBtn.addEventListener('click', function(e) {
		currentSlide -=1;
		if(currentSlide < 0){
			currentSlide = a.length - 1
		}
			step = currentSlide  *  100;
			slider.style.transform = 'translate(-' + step + '%)'
			
		
})

nextBtn.addEventListener('click', function(e) {
	currentSlide +=1;
	if( currentSlide > a.length - 1){
		currentSlide = 0
	}
		step = currentSlide  *  100;
		slider.style.transform = 'translate(-' + step + '%)'
		
})



