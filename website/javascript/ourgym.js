/**
 * Created by doc on 12/05/15.
 */
angular.module('ppgym')
    .controller('locationCtrl', function ($scope, $compile, $geolocation, $window, dataFactory) {
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
        $scope.map = null;
        $scope.generalInfo = null;



        dataFactory.getGeneralInfo().$promise.then(function (response) {
            $scope.generalInfo = response[0];

            google.maps.event.addDomListener(window, 'load', initializeMap($scope.generalInfo));
        });

        var initializeMap = function(info) {
            var myLatlng = new google.maps.LatLng(info.Latitude,info.Longitude);

            var mapOptions = {
                center: myLatlng,
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"),
                mapOptions);

            directionsDisplay = new google.maps.DirectionsRenderer({ 'map': map });
            directionsDisplay.setPanel(document.getElementById("directionsPanel"));

            var contentString = info.Address;
            var compiled = $compile(contentString)($scope);

            var infowindow = new google.maps.InfoWindow({
                content: compiled[0]
            });

            var marker = new google.maps.Marker({
                position: myLatlng,
                animation: 'BOUNCE',
                map: map,
                title: 'PPGYM',
                icon: 'http://ppgym.altervista.org/img/icon-gym.png'
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });

            $scope.map = map;
        };

        $scope.calcRouteFromPosition = function(travelMode){
            $geolocation.getCurrentPosition({
                timeout: 60000
            }).then(function(position) {
                console.log(position);
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                $scope.calcRoute(latLng, travelMode)
            });
        };

        $scope.calcRoute = function(startAddress, travelMode) {
            var tm = null;
            switch (travelMode){
                case '1':
                    tm = google.maps.TravelMode.DRIVING;
                    break;
                case '2':
                    tm = google.maps.TravelMode.TRANSIT;
                    break;
                case '3':
                    tm = google.maps.TravelMode.WALKING;
                    break;
                default:
                    tm = google.maps.TravelMode.WALKING;
                    break;
            }
            var end = new google.maps.LatLng($scope.generalInfo.Latitude,$scope.generalInfo.Longitude);
            var request = {
                origin: startAddress,
                destination:end,
                travelMode: tm,
                unitSystem: google.maps.UnitSystem.METRIC
            };
            directionsService.route(request, function(result, status) {
                switch(status){
                    case google.maps.DirectionsStatus.OK:
                        directionsDisplay.setDirections(result);
                        break;
                    case google.maps.DirectionsStatus.NOT_FOUND:
                        $window.alert('Indirizzo di partenza non trovato');
                        break;
                    case google.maps.DirectionsStatus.ZERO_RESULTS:
                        $window.alert('Nessun percorso trovato, prova a inserire un altro indirizzo');
                        break;
                    default:
                        $window.alert('ERRORE! contatta il webmaster.');
                        break;

                }
            });
        };

    })
    .controller('ourgymCtrl', function ($scope, dataFactory) {
        $scope.generalInfo = null;
        dataFactory.getGeneralInfo().$promise.then(function (response) {
            $scope.generalInfo = response[0];
        });

        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        $scope.addSlide = function(i) {


            slides.push({
                image: 'http://ppgym.altervista.org/img/palestra/pal' + i + '.jpg'
            });
        };
        for (var i=1; i<4; i++) {
            $scope.addSlide(i);
        }
        $scope.videoOther = '971QMyhN3OQ'




    });