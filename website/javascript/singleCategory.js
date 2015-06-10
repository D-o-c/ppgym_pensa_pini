angular.module('ppgym')
    .controller('singleCategoryCtrl', function ($rootScope, $scope, $state, $stateParams,
                                                   dataFactory) {
        $scope.slides=[];
        $scope.currentCategory = null;
        $scope.interval = 3000;
        $scope.categoryInstructors=[];


        dataFactory.getSingleCategory($stateParams["id"]).$promise.then(function (response) {
            if (!angular.isArray(response) || response.length != 1){
                $state.go('404');
            }

            $scope.currentCategory = response[0];
            $rootScope.title = $scope.currentCategory.name;
        });


        dataFactory.getCategoryInstructors($stateParams["id"]).$promise.then(function (response) {
            for (var i=0;i<response.length;i++){
                $scope.categoryInstructors.push(response[i]);
            }
            console.log($scope.categoryInstructors);
        });




        dataFactory.getCategoryImg($stateParams["id"]).$promise.then(function (response) {
            for (var i=0;i<response.length;i++){
                $scope.slides.push(response[i]);
            }
            console.log($scope.slides);
        });

    });