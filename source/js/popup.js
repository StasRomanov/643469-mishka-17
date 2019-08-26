"use strict";
(function () {
  var popupOpen = document.querySelector('.product-week__link');
  var popup = document.querySelector('.popup__wrapper');
  var popupForm = document.querySelector('.popup');

  popupOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup__wrapper--hidden')
  });
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Escape') {
      popup.classList.add('popup__wrapper--hidden');
    }
  });
  popup.addEventListener('click', function(e){
    if (!popupForm.contains(e.target)){
      popup.classList.add('popup__wrapper--hidden')
    }
  })
})();
