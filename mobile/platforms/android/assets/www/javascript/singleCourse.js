angular.module('ppgym')
    .controller('singleCourseCtrl', function ($rootScope, $scope, $state, $stateParams, dataFactory){

        $scope.currentCourse = null;
        $scope.slides = [];
        $scope.instructorImg = null;
        $scope.myInterval = 3000;

        dataFactory.getSingleCourse($stateParams["id"]).$promise.then(function (response) {
            if (!angular.isArray(response) || response.length != 1){
                $state.go('404');
            }
            $scope.currentCourse = response[0];
            dataFactory.getInstructorImg($scope.currentCourse.instructor).$promise.then(function (response) {
                $scope.instructorImg = response[0];
            });
            $rootScope.title = $scope.currentCourse.name;
        });
        dataFactory.getCourseImg($stateParams["id"]).$promise.then(function (response) {
            for (var i=0;i<response.length;i++){
                $scope.slides.push(response[i]);
            }
        });

        $scope.alert = null;

        $scope.signInCourse = function (cardNumber) {
            $scope.alert =  {
                type: 'success',
                msg: 'Complimenti ' + cardNumber +
                '! Ti sei registrato con successo al corso di ' + $scope.currentCourse.name + '.'
            };
        };
    });