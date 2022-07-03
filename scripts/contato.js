// Initialize and add the map
function initMap() {
    // The location of Uluru
    
    const uluru = { lat: -6.2193664, lng: -38.4991232};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

function localizacao(pos){
    const latitude = pos.coords.latitude 
    const longitude = pos.coords.longitude

    console.log(latitude,longitude)
}

navigator.geolocation.getCurrentPosition(localizacao);

window.initMap = initMap;