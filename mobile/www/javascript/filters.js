angular.module('ppgym')
    .directive('numbersOnly', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attr, ngModelCtrl) {
                function fromUser(text) {
                    if (text) {
                        var transformedInput = text.replace(/[^0-9]/g, '');

                        if (transformedInput !== text) {
                            ngModelCtrl.$setViewValue(transformedInput);
                            ngModelCtrl.$render();
                        }
                        return transformedInput;
                    }
                    return '';
                }
                ngModelCtrl.$parsers.push(fromUser);
            }
        };
    })
    .filter('courseByCategories', function() {
        return function(courses, category) {
            if (category == null){
                return courses;
            }
            var out = [];
            for (var i = 0; i < courses.length; i++){
                if(courses[i].cid == category)
                    out.push(courses[i]);
            }
            return out;
        };
    });