var menuOpener = document.querySelector(".menu-opener");
var navigation = document.querySelector(".main-navigation");

menuOpener.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpener.removeAttribute('href');
  if (menuOpener.classList.contains('menu-opener--open')){
    menuOpener.classList.remove('menu-opener--open');
    navigation.classList.remove('main-navigation--close');
    menuOpener.classList.add('menu-opener--close');
  }
  else {
    menuOpener.classList.add('menu-opener--open');
    navigation.classList.add('main-navigation--close');
    menuOpener.classList.remove('menu-opener--close');
  }
});
