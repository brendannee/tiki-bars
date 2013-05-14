var tikiBars = [
  {
    name: 'Tonga Room',
    address: '950 Mason St, San Francisco, CA',
    description: 'A must see',
    lat: 37.79216,
    lng: -122.41005
  },
  {
    name: 'Smuggler\'s Cove',
    address: '650 Gough St, San Francisco, CA',
    description: 'World\'s smallest three-story bar',
    lat: 37.77941, 
    lng: -122.42335
  },
  {
    name: 'Trad\'r Sam',
    address: '6150 Geary Blvd, San Francisco, CA',
    description: 'Divey, old-time tiki',
    lat: 37.78018, 
    lng: -122.48565
  },


];

var map = L.mapbox.map('map', 'examples.map-4l7djmvo')
    .setView([37.7755, -122.4186], 9);

var TikiIcon = L.Icon.extend({
    options: {
        shadowUrl: 'img/icons/shadow.png',
        iconSize:     [136, 148],
        shadowSize:   [238, 52],
        iconAnchor:   [68, 148],
        shadowAnchor: [68, 49],
        popupAnchor:  [-3, -76]
    }
});

tikiBars.forEach(function(bar, idx){
  var details = '<b>' + bar.name + '</b><br>' + bar.address + '<br>' + bar.description;
  L.marker([bar.lat, bar.lng], {icon: new TikiIcon({iconUrl: 'img/icons/' + (idx + 1) + '.png'})}).addTo(map).bindPopup(details);
});
