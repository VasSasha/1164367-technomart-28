'use strict';

var popUpForm = document.querySelector('.popup-form');
var closeForm = document.querySelector('.close-form');
var cartBtns = Array.from(document.querySelectorAll('.button-green'));
var btnContactUs = document.querySelector('.btn-contact');
var popUpAlert = document.querySelector('.purchased-item');
var closePopupALert = document.querySelector('.close-alert');
var popUpMap = document.querySelector('.popup-map');
var openMap = document.querySelector('.open-map');
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
var renderMapPopUp = function () {
	if (popUpMap) {
openMap.addEventListener('click', function () {
	openPopup(popUpMap);
});
closeMap.addEventListener('click', function () {
	closePopup(popUpMap);
});
}
}
renderFormPopUp();
renderMapPopUp();
var btnNextSlide = document.querySelector('.btn-next');
var btnPreviousSlide = document.querySelector('.btn-previous');
var firstSlide = document.querySelector('.first-slide');
var secondSlide = document.querySelector('.second-slide');
var firstDot = document.querySelector('.first-dot');
var secondDot = document.querySelector('.second-dot');
var sliderListenerHide = function (element) {
	element.classList.remove('current-slide');
}
var sliderListenerShow = function (element) {
	element.classList.add('current-slide');
}
var getCurrentDot = function (dot) {
	dot.classList.add('current-dot');
}
var removeCurrentDot = function (dot) {
	dot.classList.remove('current-dot');
}
var showSlide = function () {
	if (btnNextSlide) {
	 btnNextSlide.addEventListener('click', function () {
	 	sliderListenerShow(secondSlide);
	 	sliderListenerHide(firstSlide);
	 	removeCurrentDot(firstDot);
	 	getCurrentDot(secondDot);
	 });
	btnPreviousSlide.addEventListener('click', function () {
		sliderListenerShow(firstSlide);
	 	sliderListenerHide(secondSlide);
	 	removeCurrentDot(secondDot);
	 	getCurrentDot(firstDot);
	});
	}
}
showSlide();
var btnDelivery = document.querySelector('.btn-delivery');
var btnCredit =  document.querySelector('.btn-credit');
var btnGuaranty =  document.querySelector('.btn-guaranty');
var guarantyBlock =  document.querySelector('.guaranty');
var deliveryBlock =  document.querySelector('.delivery');
var creditBlock =  document.querySelector('.credit');
var showBlock = function (block) {
	block.classList.add('current-service');
}
var hideBlock = function (block) {
	block.classList.remove('current-service');
}
var getCurrentService = function (btn) {
	btn.classList.add('btn-current-service');
}
var onClassChange = function (btn) {
	btn.classList.remove('btn-current-service');
}
var switchServices = function () {
	if (btnDelivery) {
		btnDelivery.addEventListener('click', function () {
		showBlock(deliveryBlock);
		hideBlock(guarantyBlock);
		hideBlock(creditBlock);
		getCurrentService(btnDelivery);
		onClassChange(btnGuaranty);
		onClassChange(btnCredit);
	});
	btnGuaranty.addEventListener('click', function () {
		showBlock(guarantyBlock);
		hideBlock(deliveryBlock);
		hideBlock(creditBlock);
		getCurrentService(btnGuaranty);
		onClassChange(btnDelivery);
		onClassChange(btnCredit);
	})
	btnCredit.addEventListener('click', function () {
		showBlock(creditBlock);
		hideBlock(deliveryBlock);
		hideBlock(guarantyBlock);
		getCurrentService(btnCredit);
		onClassChange(btnGuaranty);
		onClassChange(btnDelivery);
	})
	}
};
switchServices();
var inputWrapper = document.querySelector('.input-text');
var textarea = inputWrapper.querySelector('textarea')
var getInputValid = function () {
	if (textarea.validity.tooShort) {
		textarea.setCustomValidity('Минимальное количество символов - 10');
		textarea.reportValidity();
	}
}
getInputValid();




