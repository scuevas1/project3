function init(){
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.40364, 2.17436);;
  var mapOptions = {
    center: myLocation,
    zoom:18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    maptypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.DROP,
    icon: 'image/icon.png'
  });
  
  var contentString = '<h2>Barcelona, Spain</h2><p>One of the most beautiful cities in the world. Barcelona is known for their art, sports and architecture. This is a must go to place and definitely check out La Sagrada Familia</p>'
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  google.maps.event.addListener(marker, 'mouseover', function(){
    infowindow.open(myMap, marker);
  });

}

google.maps.event.addDomListener(window, 'load', init);


var currentIndex = 1;
displaySlides(currentIndex);

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}

function setSlides(num) {
    displaySlides(currentIndex += num);
} 

