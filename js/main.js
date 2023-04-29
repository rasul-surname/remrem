// Добавление и удаление класса
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
	});
	$('.header__link').click(function (event) {
		$('.header__link, .header__burger, .header__menu').removeClass('active');
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.header').addClass('fixed');
		}
		else if ($(this).scrollTop() < 150) {
			$('.header').removeClass('fixed');
		}
	});
});

// Плавное перемещение по ссылке
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function (event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
};

new Swiper('.swiper-container', {
	slidesPerView: 'auto',
	breakpoints: {
		1024: {
			slidesPerView: 3,
		},
		1226: {
			slidesPerView: 4,
		}
	}

});

new Swiper('.reviews-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	}


});

var $header = $(".header")
var scroll = 10
var active = "active"
$(window).scroll(function () {
	if ($(window).scrollTop() > scroll) {
		$header.addClass(active)
	} else {
		$header.removeClass(active)
	}
});

