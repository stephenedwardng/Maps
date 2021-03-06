var MapWrapper = function(container, center, zoom) {

  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords) {

  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';


  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    icon: iconBase + 'snack_bar.png'
  });
  this.markers.push(marker);

  var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">The Mighty Tontine</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Tontine</b>, is famed for being home to Codeclan. And cats. And rats. And Harry Potter drawings.</p>'+
        '</div>'+
        '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
      infowindow.open(this.googleMap, marker);
    });

}

MapWrapper.prototype.addClickEvent = function() {
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
    var coords = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }
    this.addMarker(coords);
  }.bind(this));
}

MapWrapper.prototype.bounceMarkers = function() {
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE);
  })
}

MapWrapper.prototype.goToChicago = function() {
  var chicagoCenter = {lat: 41.881832, lng: -87.623177};

  this.googleMap.setCenter(chicagoCenter);
}

