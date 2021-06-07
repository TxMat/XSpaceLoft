mapboxgl.accessToken = 'pk.eyJ1IjoiYXJsZWFsZXhhbmRyZSIsImEiOiJja290d3RjamEwMTRuMnFrMzJ5ZXRnZXN4In0.FOVrlnWKfDctLiDM7f3VqA';
   
var map = new mapboxgl.Map({
    container: 'map',
    center: [-75,40],
    zoom: 9,
    style: 'mapbox://styles/arlealexandre/ckou8k32m0b5n17povgpokbip'
})
.setMaxZoom(10)
.setMinZoom(9);

/* marker1 -> small */
var marker1 = new mapboxgl.Marker({
    color: '#171717',
    draggable: false
})
.setLngLat([-75,40])
.setPopup(new mapboxgl.Popup().setMaxWidth("300px").setHTML("<div id='popup'><img class='Image' src='img/loft1.jpg'><div class='sub-container-popup'><div id='description'><h2>Loft n° 1</h2><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h3>Features :</h3><ul><li>Surface area : 30m²</li><li>Rooms : 2</li></ul><p><input type='submit' id='reserve' value='RESERVE'></p></div></div></div>"))
.addTo(map);

/* marker2 -> small */
var marker2 = new mapboxgl.Marker({
    color: '#171717',
    draggable: false
})
.setLngLat([-75.1,40.1])
.setPopup(new mapboxgl.Popup().setMaxWidth("300px").setHTML("<div id='popup'><img class='Image' src='img/loft2.jpg'><div class='sub-container-popup'><div id='description'><h2>Loft n° 2</h2><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h3>Features :</h3><ul><li>Surface area : 30m²</li><li>Rooms : 2</li></ul><p><input type='submit' id='reserve' value='RESERVE'></p></div></div></div>"))
.addTo(map);

/* marker3 -> luxury */
var marker3 = new mapboxgl.Marker({
    color: '#171717',
    draggable: false
})
.setLngLat([-74.8,39.9])
.setPopup(new mapboxgl.Popup().setMaxWidth("300px").setHTML("<div id='popup'><img class='Image' src='img/loft3.jpeg'><div class='sub-container-popup'><div id='description'><h2>Loft n° 3</h2><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h3>Features :</h3><ul><li>Surface area : 80m²</li><li>Rooms : 4</li></ul><p><input type='submit' id='reserve' value='RESERVE'></p></div></div></div>"))
.addTo(map);

/* marker4 -> original */
var marker4 = new mapboxgl.Marker({
    color: '#171717',
    draggable: false
})
.setLngLat([-75.2,39.8])
.setPopup(new mapboxgl.Popup().setMaxWidth("300px").setHTML("<div id='popup'><img class='Image' src='img/loft4.jpeg'><div class='sub-container-popup'><div id='description'><h2>Loft n° 4</h2><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h3>Features :</h3><ul><li>Surface area : 60m²</li><li>Rooms : 3</li></ul><p><input type='submit' id='reserve' value='RESERVE'></p></div></div></div>"))
.addTo(map);

/* marker5 -> small */
var marker5 = new mapboxgl.Marker({
    color: '#171717',
    draggable: false
})
.setLngLat([-75.3,39.95])
.setPopup(new mapboxgl.Popup().setMaxWidth("300px").setHTML("<div id='popup'><img class='Image' src='img/loft5.jpeg'><div class='sub-container-popup'><div id='description'><h2>Loft n° 5</h2><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h3>Features :</h3><ul><li>Surface area : 20m²</li><li>Rooms : 1</li></ul><p><input type='submit' id='reserve' value='RESERVE'></p></div></div></div>"))
.addTo(map);

var count_filterSmall = 0;
var count_filterBig = 0;
var count_filterOriginal = 0;
var count_filterLuxury = 0;

$("#small").click(function() {
    marker1.addTo(map);
    marker2.addTo(map);
    marker3.remove();
    marker4.remove();
    marker5.addTo(map);

    if (count_filterLuxury==0 && count_filterSmall==0 && count_filterBig==0 && count_filterOriginal==0) {
        $("#br").after("<div class='filter-resp'><p>Small <i class='fa fa-times' id='times' id='times' id='times' id='times' id='times' id='times' id='times' aria-hidden='true'></i></p></div>");
        count_filterSmall += 1;
        $("#luxury").css("pointer-events","none");
        $("#big").css("pointer-events","none");
        $("#original").css("pointer-events","none");
    }

    reset();

    $("#small").css("border","1px solid #101010");
    $("#small").css("background","#171717da");

    $("#big").css("border","1px solid #808080");
    $("#big").css("background","#171717");

    $("#original").css("border","1px solid #808080");
    $("#original").css("background","#171717");

    $("#luxury").css("border","1px solid #808080");
    $("#luxury").css("background","#171717");
})

$("#big").click(function() {
    marker1.remove();
    marker2.remove();
    marker3.remove();
    marker4.addTo(map);
    marker5.remove();

    if (count_filterLuxury==0 && count_filterSmall==0 && count_filterBig==0 && count_filterOriginal==0) {
        var content = "<div class='filter-resp'><p>Big <i class='fa fa-times' id='times' id='times' id='times' id='times' id='times' id='times' id='times' aria-hidden='true'></i></p></div>";
        $("#br").after(content);
        count_filterBig += 1;
        $("#small").css("pointer-events","none");
        $("#luxury").css("pointer-events","none");
        $("#original").css("pointer-events","none");
    }

    reset();

    $("#small").css("border","1px solid #808080");
    $("#small").css("background","#171717");

    $("#big").css("border","1px solid #101010");
    $("#big").css("background","#171717da");
    
    $("#original").css("border","1px solid #808080");
    $("#original").css("background","#171717");

    $("#luxury").css("border","1px solid #808080");
    $("#luxury").css("background","#171717");
})

$("#original").click(function() {
    marker1.remove();
    marker2.remove();
    marker3.remove();
    marker4.addTo(map);
    marker5.remove();

    if (count_filterLuxury==0 && count_filterSmall==0 && count_filterBig==0 && count_filterOriginal==0) {
        $("#br").after("<div class='filter-resp'><p>Original <i class='fa fa-times' id='times' id='times' id='times' id='times' id='times' id='times' id='times' aria-hidden='true'></i></p></div>");
        count_filterOriginal += 1;
        $("#small").css("pointer-events","none");
        $("#big").css("pointer-events","none");
        $("#luxury").css("pointer-events","none");
    }

    reset();

    $("#small").css("border","1px solid #808080");
    $("#small").css("background","#171717");

    $("#big").css("border","1px solid #808080");
    $("#big").css("background","#171717");

    $("#original").css("border","1px solid #101010");
    $("#original").css("background","#171717da");

    $("#luxury").css("border","1px solid #808080");
    $("#luxury").css("background","#171717");
})

$("#luxury").click(function() {
    marker1.remove();
    marker2.remove();
    marker3.addTo(map);
    marker4.remove();
    marker5.remove();

    if (count_filterLuxury==0 && count_filterSmall==0 && count_filterBig==0 && count_filterOriginal==0) {
        $("#br").after("<div class='filter-resp'><p>Luxury <i class='fa fa-times' id='times' id='times' id='times' id='times' id='times' id='times' id='times' id='times' aria-hidden='true'></i></p></div>");
        count_filterLuxury += 1;
        $("#small").css("pointer-events","none");
        $("#big").css("pointer-events","none");
        $("#original").css("pointer-events","none");
    }

    reset();


    $("#small").css("border","1px solid #808080");
    $("#small").css("background","#171717");

    $("#big").css("border","1px solid #808080");
    $("#big").css("background","#171717");

    $("#original").css("border","1px solid #808080");
    $("#original").css("background","#171717");

    $("#luxury").css("border","1px solid #101010");
    $("#luxury").css("background","#171717da");
})

function reset() {
    $("#times").click(function() {
        $(".filter-resp").remove();
        $("#small").css("pointer-events","auto");
        $("#big").css("pointer-events","auto");
        $("#original").css("pointer-events","auto");
        $("#luxury").css("pointer-events","auto");
        count_filterSmall = 0;
        count_filterBig = 0;
        count_filterOriginal = 0;
        count_filterLuxury = 0;

        $("#small").css("border","1px solid #808080");
        $("#small").css("background","#171717");

        $("#big").css("border","1px solid #808080");
        $("#big").css("background","#171717");

        $("#original").css("border","1px solid #808080");
        $("#original").css("background","#171717");

        $("#luxury").css("border","1px solid #808080");
        $("#luxury").css("background","#171717");

        marker1.addTo(map);
        marker2.addTo(map);
        marker3.addTo(map);
        marker4.addTo(map); 
        marker5.addTo(map);
    });
}