(function () {
  "use strict";
  ymaps.ready(function(){
    // Указывается идентификатор HTML-элемента.
    var moscow_map = new ymaps.Map("first_map", {
      center: [59.93875696477083, 30.323062265606723],
      zoom: 17
    });
    var myPlacemark = new ymaps.Placemark([59.93875696477083, 30.323062265606723], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/map-pin-svg.svg',
      iconImageSize: [66, 101],
      iconImageOffset: [-26, -101]
    });
    moscow_map.geoObjects.add(myPlacemark);
  });
})();
