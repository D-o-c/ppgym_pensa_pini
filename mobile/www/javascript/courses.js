/**
 * Created by doc on 12/05/15.
 */
angular.module('ppgym')
    .controller('coursesCtrl', function ($rootScope, $scope, dataFactory) {

        $scope.allCourses = dataFactory.getCourses();
        $scope.allCategories = dataFactory.getCategories();
        $scope.sort = 'name';

        $scope.nameOrdering = function(){
            return $scope.sort == 'name';
        };

        $scope.selectCategory = function (id) {
            if ($scope.selectedCategory == id){
                $scope.selectedCategory = null;
                $scope.categoryButtonText = 'Seleziona la categoria';
            }
            else{
                $scope.selectedCategory = id;
                for (var i = 0; i<$scope.allCategories.length; i++){
                    if ($scope.allCategories[i].id == $scope.selectedCategory){
                        $scope.categoryButtonText = $scope.allCategories[i].name;
                        break;
                    }
                }
            }
        };

        if (angular.isNumber($rootScope.selectedCategory)){
            $scope.selectCategory($rootScope.selectedCategory);
            $rootScope.selectedCategory = null;
        }
        else{
            $scope.categoryButtonText = 'Seleziona la categoria';
        }



        $scope.isCategoryActive = function (category) {
            return category.id == $scope.selectedCategory;
        };

        $scope.getLevel = function (course) {
            return course.level == 1 ? 'Livello base' : course.level == 2 ? 'Livello intermedio' :
                            course.level == 3 ? 'Livello avanzato' : 'undefined';
        };
    });