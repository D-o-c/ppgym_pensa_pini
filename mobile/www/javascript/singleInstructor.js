angular.module('ppgym')
    .controller('singleInstructorCtrl', function ($rootScope, $scope, $state, $stateParams,
                                                   dataFactory) {
        $scope.slides=[];
        $scope.currentInstructor = null;
        $scope.tweets = null;
        $scope.fbPosts = [];
        $scope.instructorCourses=[];


        dataFactory.getSingleInstructor($stateParams["id"]).$promise.then(function (response) {
            if (!angular.isArray(response) || response.length != 1){
                $state.go('404');
            }
            $scope.currentInstructor = response[0];
            $rootScope.title = $scope.currentInstructor.name;
            dataFactory.getTweets($scope.currentInstructor.twitter).$promise.then(function (response) {
                $scope.tweets = response;
            });
            dataFactory.getFacebookPosts($scope.currentInstructor.facebook).$promise.then(function (response) {
                for (var i = 0; i<response.length;i++){
                    var tmpMsg = {
                        message: response[i].message,
                        time: response[i].updated_time
                    };
                    $scope.fbPosts.push(tmpMsg);
                    tmpMsg = null;
                }
            })
        });

        dataFactory.getInstructorImg($stateParams["id"]).$promise.then(function (response) {
            for (var i= response.length -1; i >= 0;i--){
                $scope.slides.push(response[i]);
            }
        });

        $scope.getSide = function (index) {
            if (index%2 == 0){
                return 'left';
            }
            else{
                return 'right';
            }
        };

        dataFactory.getInstructorCourses($stateParams["id"]).$promise.then(function (response) {
            for (var i=0;i<response.length;i++){
                $scope.instructorCourses.push(response[i]);
            }
        });



    });