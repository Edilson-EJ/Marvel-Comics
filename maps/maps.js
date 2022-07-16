function initMap(){
    const directionsService = new google.maps.directionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        draggable: false
    });
    const map = new google.Map(document.getElementById("map"),{
        zoom: 7,
        center: {lat: 41.85, lag: -87.65}
    });

    directionsRenderer.setMap(map);

    directionsService.route({
        origin: 'Terminal Siqueira, Fortaleza-CE',
        destination: 'Prefeitura De Jaguaribe, Jaguaribe-CE',

        travelMode: google.maps.travelMode.TRANSIT

    }).the(response =>{
        console.log({response});
        directionsRenderer.setDirections(response);

        //map.fitBounds( response.routes[0].bounds );
        // renderPolyline(response.routes[0].overview_path, map);

    }).catch(err => {
        console.log({err});
    });

}
