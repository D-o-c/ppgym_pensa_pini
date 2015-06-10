angular.module('ppgym')
    .factory('dataFactory', function($resource, coursesUrl, categoriesUrl, instructorsUrl, singleCategoryUrl,
                                        tweetsUrl, generalInfoUrl, singleCourseUrl, courseImgUrl,
                                        instructorImgUrl, singleInstructorUrl, categoriesImgUrl, facebookPostsUrl, categoryInstructorsUrl,instructorCoursesUrl){

        var generalInfoResource = $resource(generalInfoUrl);

        var coursesResource = $resource(coursesUrl);
        var singleCourseResource = $resource(singleCourseUrl);
        var courseImgResource = $resource(courseImgUrl);

        var categoriesResource = $resource(categoriesUrl);
        var singleCategoryResource = $resource(singleCategoryUrl);
        var categoriesImgResource = $resource(categoriesImgUrl);
        var categoryInstructorsResource = $resource(categoryInstructorsUrl);
        var instructorCoursesResource=$resource(instructorCoursesUrl);

        var instructorsResource = $resource(instructorsUrl);
        var singleInstructorResource = $resource(singleInstructorUrl);
        var instructorImgResource = $resource(instructorImgUrl);
        var tweetsResource = $resource(tweetsUrl);
        var facebookResource = $resource(facebookPostsUrl);

        return {
            getGeneralInfo : function(){
                return generalInfoResource.query();
            },

            getSingleCourse : function (courseId) {
                return singleCourseResource.query({id:courseId});
            },
            getCourseImg : function (courseId) {
                return courseImgResource.query({id:courseId});
            },
            getCourses : function () {
                return coursesResource.query();
            },

            getCategories : function () {
                return categoriesResource.query();
            },
            getSingleCategory : function (categoryId){
                return singleCategoryResource.query({id:categoryId});
            },
            getCategoryImg : function (categoryId) {
                return categoriesImgResource.query({id:categoryId});
            },
            getCategoryInstructors : function (categoryId){
                return categoryInstructorsResource.query({id:categoryId});
            },
            getInstructorCourses : function (instructorId){
                return instructorCoursesResource.query({id:instructorId});
            },

            getInstructors : function () {
                return instructorsResource.query();
            },
            getSingleInstructor : function (instructorId) {
                return singleInstructorResource.query({id:instructorId});
            },
            getInstructorImg : function (instructorId) {
                return instructorImgResource.query({id:instructorId});
            },
            getTweets : function (twitterNick) {
                return tweetsResource.query({nick:twitterNick});
            },
            getFacebookPosts : function (facebookId) {
                return facebookResource.query({id:facebookId});
            }
        };
    });
