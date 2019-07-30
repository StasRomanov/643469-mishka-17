var menuOpener = document.querySelector(".main-header__menu-opener");
var navigation = document.querySelector(".main-navigation");

navigation.classList.add('main-navigation--close');
menuOpener.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpener.removeAttribute('href');
  if (menuOpener.classList.contains('main-header__menu-opener--open')){
    menuOpener.classList.add('main-header__menu-opener--close');
  } else {
    menuOpener.classList.remove('main-header__menu-opener--close');
  }
  menuOpener.classList.toggle('main-header__menu-opener--open');
  navigation.classList.toggle('main-navigation--close');
});
