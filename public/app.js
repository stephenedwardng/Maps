var initialize = function() {
  var center = { lat: 55.857103, lng: -4.243951};
  var zoom = 18;
  var mapDiv = document.querySelector("#main-map");
  var mainMap = new MapWrapper(mapDiv, center, zoom);

  mainMap.addMarker(center);
  mainMap.addClickEvent();

  var button = document.querySelector("#bounce-button");
  button.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  var chicagoCenter = { lat: 55.857103, lng: -4.243951};
  var chicagoButton = document.querySelector("#chicago-button");
  chicagoButton.addEventListener("click", mainMap.goToChicago.bind(mainMap));

}

window.addEventListener("load", initialize);