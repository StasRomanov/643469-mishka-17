var menuOpener = document.querySelector(".main-header__menu-opener");
var navigation = document.querySelector(".main-navigation");
var navigationClose = "main-navigation--close";
var svgOpenMenu = "main-header__menu-opener--open";
var svgCloseMenu = "main-header__menu-opener--close";

window.onload = function () {
  navigation.classList.add(navigationClose);
  menuOpener.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (menuOpener.classList.contains(svgOpenMenu)){
      menuOpener.classList.add(svgCloseMenu);
    } else {
      menuOpener.classList.remove(svgCloseMenu);
    }
    menuOpener.classList.toggle(svgOpenMenu);
    navigation.classList.toggle(navigationClose);
  });
};
