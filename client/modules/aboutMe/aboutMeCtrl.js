angular.module('portfolio').controller('aboutMeCtrl',function($scope){
  $scope.personality = [
    {
      label:'Dynamique',
      description:'Sans volonté d\'amélioration, la stagnation entraîne le déclin. Pour cette raison, je cherche \
        toujours à aller de l\'avant aussi bien au travail que dans la vie, par l\'ingéniosité, la bonne humeur et \
        la persévérance.',
      icon:'glyphicon-forward'
    },
    {
      label:'Sociable',
      description:'Mon tempérament enjoué et naturel me permet de m\'intégrer aisément à des groupes variés, \
        au travail et dans la vie quotidienne. Je sais faire preuve d\'empathie, d\'écoute et d\'humilité.',
      icon:'glyphicon-user'
    },
    {
      label:'Ouvert d\'esprit',
      description:'Je considère que chaque question, chaque point de vue, a une valeur qui mérite d\'être considérée. \
        Par la discussion, le débat et l\'échange d\'idées, nous pouvons apporter une solution à tous les problèmes.',
      icon:'glyphicon-globe'
    },
    {
      label:'Objectif',
      description:'J\'essaie en tout temps de respecter deux niveaux d\'objectivité. Le premier, par la connaissance de mes propres \
        points forts et points faibles, me permet de m\'améliorer constamment. Le second me force à évaluer précisément la cause de \
        problèmes divers pour tenter de les résoudre au mieux, et les différentes étapes à traverser pour accomplir un but fixé.',
      icon:'glyphicon-screenshot'
    }
  ]

  $scope.identity = [
    {
      label:'Date de naissance',
      description:'5 avril 1994'
    },
    {
      label:'Adresse française',
      description:'2 rue des fleurs, pavillon 4, 77166 GRISY-SUISNES'
    },
    {
      label:'Adresse québécoise',
      description:'96 rue Dubé, appartement 90, G7H 2V2 CHICOUTIMI'
    },
    {
      label:'Email',
      description:'nicolas.aperce@orange.fr'
    },
    {
      label:'Études courantes',
      description:'Diplôme d\'ingénieur en informatique'
    },
    {
      label:'Recherche',
      description:'Un stage de fin d\'étude en informatique, encadré par un ingénieur ou équivalent'
    }
  ]
})
