/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
 function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: { lat:  -5.88667, lng: -38.6203},
      disableDefaultUI: true,
    });
  
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById("sidebar"));
  
    const control = document.getElementById("floating-panel");
  
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
  
    const onChangeHandler = function () {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
  
    document.getElementById("start").addEventListener("change", onChangeHandler);
    document.getElementById("end").addEventListener("change", onChangeHandler);
  }
  
  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;
  
    directionsService
      .route({
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to " + status));
  }
  
  window.initMap = initMap;
