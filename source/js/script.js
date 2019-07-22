var menuOpener = document.querySelector(".menu-opener");
var navigation = document.querySelector(".main-navigation");

navigation.classList.add('main-navigation--close');
menuOpener.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpener.removeAttribute('href');
  if (menuOpener.classList.contains('menu-opener--open')){
    menuOpener.classList.add('menu-opener--close');
  } else {
    menuOpener.classList.remove('menu-opener--close');
  }
  menuOpener.classList.toggle('menu-opener--open');
  navigation.classList.toggle('main-navigation--close');
});
