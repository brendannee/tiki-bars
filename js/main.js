var tikiBars = [
  {
    name: 'Tonga Room',
    address: '950 Mason St, San Francisco, CA',
    description: 'A must see',
    website: 'http://tongaroom.com',
    lat: 37.79216,
    lng: -122.41005
  },
  {
    name: 'Smuggler\'s Cove',
    address: '650 Gough St, San Francisco, CA',
    description: 'World\'s smallest three-story bar',
    website: 'http://http://smugglerscovesf.com/',
    lat: 37.77941, 
    lng: -122.42335
  },
  {
    name: 'Trad\'r Sam',
    address: '6150 Geary Blvd, San Francisco, CA',
    description: 'Divey, old-time tiki',
    website: 'http://critiki.com/location/?loc_id=157',
    lat: 37.78018, 
    lng: -122.48565
  },
  {
    name: 'Trader Vic\'s',
    address: '9 Anchor Dr, Emeryville, CA',
    description: 'A real tiki bar out on the Emeryville Marina.',
    website: 'http://tradervicsemeryville.com',
    lat: 37.8380, 
    lng: -122.3078
  },
  {
    name: 'Conga Lounge',
    address: '5422 College Ave, Oakland, CA',
    description: 'Upstairs Tiki Bar in Rockridge',
    website: 'http://congalounge.com',
    lat: 37.84069, 
    lng: -122.25127
  },
  {
    name: 'Forbidden Island',
    address: '1304 Lincoln Ave, Alameda, CA',
    description: 'Island-themed Tiki bar on a real Island.',
    website: 'http://forbiddenislandalameda.com',
    lat: 37.84069, 
    lng: -122.25127
  },
  {
    name: 'Bamboo Hut',
    address: '479 Broadway, San Francisco, CA',
    description: '',
    website: 'http://critiki.com/location/?loc_id=158',
    lat: 37.797950, 
    lng: -122.405071
  },
  {
    name: 'Tiki Haven',
    address: '1334 Noriega St, San Francisco, CA',
    description: '',
    website: 'http://critiki.com/location/?loc_id=784',
    lat: 37.75414, 
    lng: -122.47821
  },
  {
    name: 'Kona Club',
    address: '4401 Piedmont Ave, Oakland, CA',
    description: '',
    website: 'http://critiki.com/location/?loc_id=543',
    lat: 37.83040, 
    lng: -122.24732 
  },
  {
    name: 'Hukilau',
    address: '230 Jackson Street, San Jose, CA',
    description: '',
    website: 'http://www.dahukilau.com/',
    lat: 37.34895, 
    lng: -121.8935
  },
  {
    name: 'The Downtown Tiki Lounge',
    address: '144 South B St., San Mateo, CA',
    description: '',
    website: 'http://www.thedowntowntikilounge.com/',
    lat: 37.56651, 
    lng: -122.32365
  },
];

var mbTiles = new L.tileLayer('http://tiki.bn.ee/php/mbtiles.php?z={z}&x={x}&y={y}', {
    tms: true,
    attribution: 'Tiles Courtesy of <a href="http://tiles.mapbox.com/mapbox/map/geography-class" target="_blank">MapBox</a>',
});

var mapboxFallback = new L.TileLayer('http://a.tiles.mapbox.com/v3/brendannee.map-28wp10x1/{z}/{x}/{y}.png');

var map = new L.Map('map', {layers: [mapboxFallback, mbTiles], zoom: 11, center: [37.6755, -122.3186], maxZoom: 15, minZoom: 10});

var TikiIcon = L.Icon.extend({
    options: {
        shadowUrl: 'img/icons/shadow.png',
        iconSize:     [68, 74],
        shadowSize:   [119, 52],
        iconAnchor:   [34, 74],
        shadowAnchor: [34, 43],
        popupAnchor:  [-3, -76]
    }
});

tikiBars.forEach(function(bar, idx){
  var website = (bar.website) ? '<br><a href="' + bar.website + '" target="_blank">' + bar.website + '</a>' : ''
    , details = '<div class="bar-title">' + bar.name + '</div>' + bar.address + '<br>' + bar.description + website;
  L.marker([bar.lat, bar.lng], {icon: new TikiIcon({iconUrl: 'img/icons/' + (idx + 1) + '.png'})}).addTo(map).bindPopup(details);
});
