// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {

  var map_options = {
    center: new google.maps.LatLng(35.0, 0.7),
    zoom: 2,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(
    document.getElementById('map'), 
    map_options
  );

  var cities = {};
  cities['london'] = {
    center: new google.maps.LatLng(51.3026, 0.739)
  };
  cities['mordor'] = {
    center: new google.maps.LatLng(10, 2)
  };

  for (var city in cities) {
    var circle_options = {
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map: map,
      center: cities[city].center,
      radius: 1000000
    };

    city_cirle = new google.maps.Circle(circle_options);
  }

    
})
