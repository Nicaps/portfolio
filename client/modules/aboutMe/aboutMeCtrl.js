angular.module('portfolio').controller('aboutMeCtrl',function($scope){
  $scope.title = 'Qui je suis'
  $scope.personality = [
    {
      label:'Dynamique',
      description:'',
      icon:'glyphicon-forward'
    },
    {
      label:'Ouvert d\'esprit',
      description:'',
      icon:'glyphicon-globe'
    },
    {
      label:'Objectif',
      description:'',
      icon:'glyphicon-screenshot'
    }
  ]
})
