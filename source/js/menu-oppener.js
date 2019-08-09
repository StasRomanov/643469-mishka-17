window.onload = function () {
  var menuOpenerEl = document.querySelector(".main-navigation__menu-opener");
  var navigation = document.querySelectorAll(".main-navigation__list");
  var navigationClose = "main-navigation--close";
  var svgOpenMenuClass = "main-navigation__menu-opener--open";
  var svgCloseMenuClass = "main-navigation__menu-opener--close";
  var animationMenu = "main-navigation__list-animation";

  navigation.forEach(function(navList) {
    navList.classList.toggle(navigationClose);
  });
  menuOpenerEl.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (menuOpenerEl.classList.contains(svgOpenMenuClass)){
      menuOpenerEl.classList.add(svgCloseMenuClass);
      navigation.forEach(function(navList) {
        navList.classList.toggle(animationMenu);
      });
    } else {
      menuOpenerEl.classList.remove(svgCloseMenuClass);
      navigation.forEach(function(navList) {
        navList.classList.toggle(animationMenu);
      });
    }
    menuOpenerEl.classList.toggle(svgOpenMenuClass);
    navigation.forEach(function(navList) {
      navList.classList.toggle(navigationClose);
    });
  });
};
