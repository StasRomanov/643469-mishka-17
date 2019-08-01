var menuOpener = document.querySelector(".main-navigation__menu-opener");
var navigation = document.querySelectorAll(".main-navigation__list");
var navigationClose = "main-navigation--close";
var svgOpenMenu = "main-navigation__menu-opener--open";
var svgCloseMenu = "main-navigation__menu-opener--close";

window.onload = function () {
  for (var i = 0; i<navigation.length; i++) {
    navigation[i].classList.toggle(navigationClose);
  }
  menuOpener.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (menuOpener.classList.contains(svgOpenMenu)){
      menuOpener.classList.add(svgCloseMenu);
    } else {
      menuOpener.classList.remove(svgCloseMenu);
    }
    menuOpener.classList.toggle(svgOpenMenu);
    for (var i = 0; i < navigation.length; i++) {
      navigation[i].classList.toggle(navigationClose);
    }
  });
};
