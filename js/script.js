'use strict';

var popUpForm = document.querySelector('.popup-form');
var closeForm = document.querySelector('.close-form');
var cartBtns = Array.from(document.querySelectorAll('.button-green'));
var btnContactUs = document.querySelector('.btn-contact');
var popUpAlert = document.querySelector('.purchased-item');
var closePopupALert = document.querySelector('.close-alert');
var btnNextSlide = document.querySelector('.btn-next');
var btnPreviousSlide = document.querySelector('.btn-previous');
var firstSlide = document.querySelector('.first-slide');
var secondSlide = document.querySelector('.second-slide');
var popUpMap = document.querySelector('.popup-map');
var openMap = document.querySelector('.btn-open-map');
var closeMap = document.querySelector('.close-map');

var openPopup = function (element) {
	element.classList.remove('pop-up');
}

var closePopup = function (element) {
		element.classList.add('pop-up');
}
var postListenersAndOpen = function (array) {
	for (var i = 0; i < array.length; i++) {
		array[i].addEventListener('click', function () {
	    openPopup(popUpAlert);
});
	}
};
var deleteListenersAndClose = function (array, element) {
	return function (evt) {
		evt.target = element;
	for (var i = 0; i < array.length; i++) {
		array[i].addEventListener('click', function () {
	    closePopup(popUpAlert);
});
	}
	}
};
postListenersAndOpen(cartBtns);
closePopupALert.addEventListener('click', function () {
	closePopup(popUpAlert);
});
var renderFormPopUp = function () {
	if (popUpForm) {
	btnContactUs.addEventListener('click', function () {
	openPopup(popUpForm)
});
closeForm.addEventListener('click', function () {
	closePopup(popUpForm);
});
}
}
renderFormPopUp();
openMap.addEventListener('click', function () {
	openPopup(popUpMap);
});
closeMap.addEventListener('click', function () {
	closePopup(popUpMap);
})

