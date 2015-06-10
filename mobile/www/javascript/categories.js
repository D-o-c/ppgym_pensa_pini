angular.module('ppgym')
    .controller('categoriesCtrl', function ($rootScope, $scope, dataFactory, $state) {
        $scope.allCategories = null;
        dataFactory.getCategories().$promise.then(function (response) {
            $scope.allCategories = response;
        });

        $scope.seeCourse = function(id){
            $rootScope.selectedCategory = id;
            $state.go('courses');
        };
    });