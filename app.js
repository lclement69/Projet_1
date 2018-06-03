// AIzaSyAGEvnWhSvv_KGP41ifsz6JtQ1yD9Leg98 
var map;
function initMap() {
  var myLatLng = {lat: 48.873162, lng: 2.349839};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng
  });

   var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}

var ulMenu = document.querySelector('#menu');
var burger = document.querySelector('#burger');

ulMenu.addEventListener('click', function() {
  if (window.outerWidth < 967) {
    ulMenu.style.display = 'none';
  }
});

burger.addEventListener('click', function() {
  if (window.outerWidth < 967) {
    ulMenu.style.display = 'block';
  }
});