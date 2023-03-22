// Menu

const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle('_lock');
	})
}

// Swiper #1 Season

const electSwiper = new Swiper('.elect-slider', {
	spaceBetween: 50,
	slidesPerView: 1,
  	navigation: {
		nextEl: '.elect-slider-next',
		prevEl: '.elect-slider-prev',
	},
  	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		}, 
		320: {
			slidesPerView: 1
		}
	}
});

// Swiper #2 Novelties

const noveltiesSwiper = new Swiper('.novelties-slider', {
	spaceBetween: 23,
	slidesPerView: 1,
  	navigation: {
		nextEl: '.novelties-slider-next',
		prevEl: '.novelties-slider-prev',
	},
	breakpoints: {
		1155: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		}, 
		320: {
			slidesPerView: 1
		}
	}
});