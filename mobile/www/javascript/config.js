angular.module('ppgym')
    .constant('generalInfoUrl', 'http://ppgym.altervista.org/generalInfo.php')
    .constant('coursesUrl', 'http://ppgym.altervista.org/courses.php')
    .constant('singleCourseUrl', 'http://ppgym.altervista.org/courses.php?courseID=:id')
    .constant('categoriesUrl', 'http://ppgym.altervista.org/categories.php')
    .constant('singleCategoryUrl', 'http://ppgym.altervista.org/categories.php?categoryID=:id')
    .constant('instructorsUrl','http://ppgym.altervista.org/instructors.php')
    .constant('singleInstructorUrl', 'http://ppgym.altervista.org/instructors.php?instructorID=:id')
    .constant('tweetsUrl', 'http://ppgym.altervista.org/tweets.php?twitterNick=:nick')
    .constant('facebookPostsUrl', 'http://ppgym.altervista.org/facebookPosts.php?facebookID=:id')
    .constant('courseImgUrl','http://ppgym.altervista.org/courseImgs.php?courseID=:id')
    .constant('instructorImgUrl', 'http://ppgym.altervista.org/instructorImgs.php?instructorID=:id')
    .constant('categoriesImgUrl', 'http://ppgym.altervista.org/categoriesImgs.php?categoryID=:id')
    .constant('categoryInstructorsUrl','http://ppgym.altervista.org/categoryInstructors.php?categoryID=:id')
    .constant('instructorCoursesUrl','http://ppgym.altervista.org/instructorcourses.php?instructorID=:id')
    .config(function ($stateProvider, $urlRouterProvider){
        $stateProvider.state('home', {
            title: 'Home',
            url: '/home',
            templateUrl: "views/home.html"
        });

        $stateProvider.state('location', {
            title: 'Dove Siamo',
            url: "/location",
            templateUrl: "views/location.html",
            controller: 'locationCtrl'
        });

        $stateProvider.state('ourgym', {
            title: 'Chi siamo',
            url: "/ourgym",
            templateUrl: "views/ourgym.html",
            controller: 'ourgymCtrl'
        });

        $stateProvider.state('courses', {
            title: 'Corsi',
            url: "/courses",
            templateUrl: "views/courses.html",
            controller: 'coursesCtrl'
        });

        $stateProvider.state('singleCourse', {
            title: '',
            url: "/courses/:id",
            params: {id: '0'},
            templateUrl: "views/singleCourse.html",
            controller: 'singleCourseCtrl'
        });

        $stateProvider.state('categories', {
            title: 'Categorie',
            url: "/categories",
            templateUrl: "views/categories.html",
            controller: 'categoriesCtrl'
        });

        $stateProvider.state('singleCategory', {
            title: '',
            url: "/categories/:id",
            params: {id: '0'},
            templateUrl: "views/singleCategory.html",
            controller: 'singleCategoryCtrl'
        });

        $stateProvider.state('singleInstructor', {
            title: '',
            url: "/instructors/:id",
            params: {id: '0'},
            templateUrl: "views/singleInstructor.html",
            controller: 'singleInstructorCtrl'
        });
        $stateProvider.state('404',{
            title: 'Pagina non trovata',
            url: "/404",
            templateUrl: "views/404.html"
        });

        $urlRouterProvider.otherwise('home');

    })
    .config(function(paginationTemplateProvider) {
        paginationTemplateProvider.setPath('views/pagination.html');
    });