angular.module('portfolio').controller('workExperienceCtrl',function($scope){
  $scope.title = 'Mes expériences professionnelles'
  $scope.selected = {
    ITfilter:''
  }

  $scope.xps = [
    {
      label:'Développeur Web SAPUI5',
      organization:'SAS Kalydia',
      type:'Stage',
      description:'',
      place:'Levallois-Péret, France',
      begin:'Mai 2016',
      beginDate:'201605',
      end:'Juillet 2016',
      ITrelated:'true'
    },
    {
      label:'Gestionnaire foyer des étudiants et association musicale',
      organization:'3iL',
      type:'Bénévolat',
      description:'',
      place:'Limoges, France',
      begin:'Septembre 2015',
      beginDate:'201509',
      end:'Mai 2016',
      ITrelated:'false'
    },
    {
      label:'Stage en bureau d\'étude',
      organization:'Legrand',
      type:'Stage',
      description:'',
      place:'Limoges, France',
      begin:'Mai 2015',
      beginDate:'201505',
      end:'Juillet 2015',
      ITrelated:'true'
    },
    {
      label:'Service en salle',
      organization:'Courtepaille',
      type:'Emploi étudiant',
      description:'',
      place:'Limoges, France',
      begin:'Avril 2015',
      beginDate:'201504',
      end:'Mai 2015',
      ITrelated:'false'
    }
  ]

  $scope.dateOrderer = [
    {
      order:'+beginDate',
      text:'du plus ancien au plus récent'
    },
    {
      order:'-beginDate',
      text:'du plus récent au plus ancien'
    }
  ]

  $scope.ITfilters = [
    {
      filter:'{ITrelated:true}',
      text:'Relatifs à l\'informatique'
    },
    {
      filter:'{ITrelated:false}',
      text:'Non relatifs à l\'informatique'
    },
    {
      filter:'',
      text:'Tout'
    }
  ]
})
