/**
 * Created by doc on 11/05/15.
 */
angular.module('ppgym', ['ui.router', 'ui.bootstrap', 'ngTouch', 'youtube-embed', 'ngResource',
                'ngAnimate', 'ngSanitize', 'angularUtils.directives.dirPagination',
                'angular-timeline', 'ngGeolocation'])
    .controller('homeCtrl', function($rootScope, $scope, $state){


        $rootScope.$on('$stateChangeSuccess', function () {
            $rootScope.title = $state.current.title;
        });

        $rootScope.$on('$stateNotFound',
            function(event, unfoundState, fromState, fromParams){
                $state.go('404');
            });

        $scope.goTo = function(destinationState){
            $state.go(destinationState);
        };

        $scope.navCollapsed = true;

        $scope.invertNavCollapsed = function(){
            $scope.navCollapsed = !$scope.navCollapsed;
        };

        $scope.collapsedClass = function () {
            return !$scope.navCollapsed && 'in';
        };

        $scope.menu = [
            {name: 'La Palestra', url: 'ourgym'},
            {name: 'Testimonianze', url: 'testimonials'},
            {name: 'Orario Corsi', url: 'schedule'},
            {name: 'Registrazione e Pagamenti', url: 'registration'},
            {name: 'Corsi', url: 'courses'},
            {name: 'Categorie', url: 'categories'},
            {name: 'Stanze', url: 'rooms'},
            {name: 'Istruttori', url: 'instructors'}];

        $scope.isActive = function (item) {
            return $state.is(item.url);
        };
    });