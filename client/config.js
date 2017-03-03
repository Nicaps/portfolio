var portfolio = angular.module('portfolio',['ngRoute','ngAnimate'])

var imgPath = '../ressources/images'

portfolio.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'./client/modules/home/home.html',
      controller:'homeCtrl'
    })
    .when('/about',{
      templateUrl:'./client/modules/aboutMe/aboutMe.html',
      controller:'aboutMeCtrl'
    })
    .when('/scolarship',{
      templateUrl:'./client/modules/scolarship/scolarship.html',
      controller:'scolarshipCtrl'
    })
    .when('/work-experience',{
      templateUrl:'./client/modules/work-experience/workExperience.html',
      controller:'workExperienceCtrl'
    })
    .when('/competences',{
      templateUrl:'./client/modules/competences/competences.html',
      controller:'competencesCtrl'
    })
    .when('/projects',{
      templateUrl:'./client/modules/projects/projects.html',
      controller:'projectsCtrl'
    })
    .when('/hobbies',{
      templateUrl:'./client/modules/hobbies/hobbies.html',
      controller:'hobbiesCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})

portfolio.controller('mainCtrl', function($scope){
  $scope.navBrand = 'Accueil'
  $scope.views = 'vues'
  $scope.cv = 'Mon CV en pdf'
})
