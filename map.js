mapboxgl.accessToken = 'pk.eyJ1IjoiYXJsZWFsZXhhbmRyZSIsImEiOiJja290d3RjamEwMTRuMnFrMzJ5ZXRnZXN4In0.FOVrlnWKfDctLiDM7f3VqA';
   
var map = new mapboxgl.Map({
    container: 'map',
    center: [-75,40],
    zoom: 9,
    style: 'mapbox://styles/arlealexandre/ckou8k32m0b5n17povgpokbip'
})
.setMaxZoom(10)
.setMinZoom(9);

var marker1 = new mapboxgl.Marker({
    color: '#171717',
    draggable: false
})
.setLngLat([-75,40])
.setPopup(new mapboxgl.Popup().setMaxWidth("300px").setHTML("<div id='popup'><img class='Image' src='img/loft1.jpg'><div id='description'><h2>Name of the listing</h2><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h3>Technical info :</h3><ul><li>Superficie</li><li>Nombre de chambre</li></ul><p><input type='submit' value='RESERVER' src='www.google.com'></p></div></div>"))
.addTo(map);

var marker2 = new mapboxgl.Marker({
    color: '#171717',
    draggable: false
})
.setLngLat([-75.1,40.1])
.setPopup(new mapboxgl.Popup().setMaxWidth("300px").setHTML("<div id='popup'><img class='Image' src='img/loft2.jpg'><div id='description'><h2>Name of the listing</h2><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h3>Technical info :</h3><ul><li>Superficie</li><li>Nombre de chambre</li></ul><p><input type='submit' value='RESERVER' src='www.google.com'></p></div></div>"))
.addTo(map);

var marker3 = new mapboxgl.Marker({
    color: '#171717',
    draggable: false
})
.setLngLat([-74.8,39.9])
.setPopup(new mapboxgl.Popup().setMaxWidth("300px").setHTML("<div id='popup'><img class='Image' src='img/loft3.jpeg'><div id='description'><h2>Name of the listing</h2><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h3>Technical info :</h3><ul><li>Superficie</li><li>Nombre de chambre</li></ul><p><input type='submit' value='RESERVER' src='www.google.com'></p></div></div>"))
.addTo(map);

var marker4 = new mapboxgl.Marker({
    color: '#171717',
    draggable: false
})
.setLngLat([-75.2,39.8])
.setPopup(new mapboxgl.Popup().setMaxWidth("300px").setHTML("<div id='popup'><img class='Image' src='img/loft4.jpeg'><div id='description'><h2>Name of the listing</h2><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h3>Technical info :</h3><ul><li>Superficie</li><li>Nombre de chambre</li></ul><p><input type='submit' value='RESERVER' src='www.google.com'></p></div></div>"))
.addTo(map);

var marker5 = new mapboxgl.Marker({
    color: '#171717',
    draggable: false
})
.setLngLat([-75.3,39.95])
.setPopup(new mapboxgl.Popup().setMaxWidth("300px").setHTML("<div id='popup'><img class='Image' src='img/loft5.jpeg'><div id='description'><h2>Name of the listing</h2><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h3>Technical info :</h3><ul><li>Superficie</li><li>Nombre de chambre</li></ul><p><input type='submit' value='RESERVER' src='www.google.com'></p></div></div>"))
.addTo(map);