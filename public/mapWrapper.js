var MapWrapper = function(container, center, zoom) {

  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);
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