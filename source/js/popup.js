window.onload = function () {
  var popupOpen = document.querySelector('.product-week__link');
  var popup = document.querySelector('.popup__wrapper');

  popupOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup__wrapper--hidden')
  });

  document.addEventListener('keydown',function (e) {
    if (e.keyCode === 27) {
      popup.classList.add('popup__wrapper--hidden');
    }
  });
};
