(function () {
  console.log('The Start');

  var initMap = function initMapF(){

    var styles = [
      // {
      //   stylers: [
      //     { hue: "#00ffe6" },
      //     { saturation: -20 }
      //   ]
      // },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [
          { visibility: "off" }
        ]     
      },
      {
        featureType: 'administrative.neighborhood'
      }
    ];

    var styledMap = new google.maps.StyledMapType(styles,
    {name: "Culture Map"});
    
    var mapOptions = {
      center: { lat: -34.397, lng: 150.644},
      zoom: 3,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      }
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
         initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
         map.setCenter(initialLocation);
      });
    }
  }

  google.maps.event.addDomListener(window, 'load', initMap);

})();

//want a list of the world's cities
  //must contain population
  //and log and lat

//create 2 inputs
  //one with population limit
  //one with distance between cities

  //if population is over x
  //and is distance is greater than y to next city

  //mark city

  