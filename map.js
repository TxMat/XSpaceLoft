mapboxgl.accessToken = 'pk.eyJ1IjoiYXJsZWFsZXhhbmRyZSIsImEiOiJja290d3RjamEwMTRuMnFrMzJ5ZXRnZXN4In0.FOVrlnWKfDctLiDM7f3VqA';
   
var map = new mapboxgl.Map({
    container: 'map',
    center: [-75,40],
    zoom: 9,
    style: 'mapbox://styles/arlealexandre/ckou8k32m0b5n17povgpokbip'
})
.setMaxZoom(10)
.setMinZoom(9);

var marker = new mapboxgl.Marker({
    color: '#171717',
    draggable: false
})
.setLngLat([-75,40])
.setPopup(new mapboxgl.Popup().setMaxWidth("500px").setHTML("<div id='popup'><div id='Image'><h2>Image</h2></div><div id='description'><h2>Name of the listing</h2><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h3>Technical info :</h3><ul><li>Superficie</li><li>Nombre de chambre</li></ul><p><input type='submit' value='RESERVER' src='www.google.com'></p></div></div>"))
.addTo(map);
