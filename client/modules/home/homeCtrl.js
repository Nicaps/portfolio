angular.module('portfolio').controller('homeCtrl',function($scope){
  $scope.title = 'Accueil'

  $scope.welcome = 'Bienvenue ! Utilisez les tuiles ci-dessous pour explorer mon portfolio :)'

  $scope.tiles = [
    {
      tileTitle: 'À propos',
      description: 'Une description de qui je suis.',
      link: '#!/about'
    },
    {
      tileTitle: 'Ma scolarité',
      description: 'Présentation de mon cursus scolaire depuis le baccalauréat.',
      link: '#!/scolarship'
    },
    {
      tileTitle: 'Mon expérience professionnelle',
      description: 'Présentation de mes emplois passés, relatifs ou non à l\'informatique, et ce qu\'ils m\'ont apporté.',
      link: '#!/work-experience'
    },
    {
      tileTitle: 'Compétences',
      description: 'Vous trouverez ici mes compétences dans tous les domaines que j\'ai approché.',
      link: '#!/competences'
    },
    {
      tileTitle: 'Mes projets',
      description: 'Voici les différents projets que j\'ai pu mener, dans leurs contextes, et les résultats obtenus.',
      link: '#!/projects'
    },
    {
      tileTitle: 'Mes hobbies',
      description: 'Je pense que les hobbies sont un bon moyen d\'en apprendre plus sur la personnalité de quelqu\'un, alors voici les miens.',
      link: '#!/hobbies'
    }
  ]
})
