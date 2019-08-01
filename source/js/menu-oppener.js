window.onload = function () {
  var menuOpenerEl = document.querySelector(".main-navigation__menu-opener");
  var navigation = document.querySelectorAll(".main-navigation__list");
  var navigationClose = "main-navigation--close";
  var svgOpenMenuClass = "main-navigation__menu-opener--open";
  var svgCloseMenuClass = "main-navigation__menu-opener--close";

  navigation.forEach(function(navList) {
    navList.classList.toggle(navigationClose);
  });
  menuOpenerEl.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (menuOpenerEl.classList.contains(svgOpenMenuClass)){
      menuOpenerEl.classList.add(svgCloseMenuClass);
    } else {
      menuOpenerEl.classList.remove(svgCloseMenuClass);
    }
    menuOpenerEl.classList.toggle(svgOpenMenuClass);
    navigation.forEach(function(navList) {
      navList.classList.toggle(navigationClose);
    });
  });
};
