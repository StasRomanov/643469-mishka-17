"use strict";
(function () {
  var popupOpen = document.querySelector('.product-week__link');
  var popup = document.querySelector('.popup__wrapper');
  var popupForm = document.querySelector('.popup');
  popupOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    let scrollX = window.scrollX;
    let scrollY = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(scrollX, scrollY);
    };
    popup.classList.remove('popup__wrapper--hidden')
  });
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Escape') {
      popup.classList.add('popup__wrapper--hidden');
      window.onscroll = function () {
        window.scrollTo(scrollX, scrollY);
      };
    }
  });
  popup.addEventListener('click', function(e){
    if (!popupForm.contains(e.target)){
      popup.classList.add('popup__wrapper--hidden');
      window.onscroll = function () {
        window.scrollTo(scrollX, scrollY);
      };
    }
  });
})();
