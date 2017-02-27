var portfolio = angular.module('portfolio',['ngRoute','ngAnimate'])

portfolio.register

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
    .otherwise({
      redirectTo: '/'
    })
})

portfolio.controller('mainCtrl', function($scope){
  $scope.coucou = 'coucou'
})
