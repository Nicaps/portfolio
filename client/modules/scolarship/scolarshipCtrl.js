angular.module('portfolio').controller('scolarshipCtrl',function($scope){
  $scope.title = 'Ma scolarité'
  $scope.schools = [
    {
      name:'Lycée Blaise Pascal',
      adress:'15 Allée Commandant Guesnet, 77170 Brie Comte Robert, France',
      begin:'Septembre 2009',
      beginDate:'200909',
      end:'Juin 2012',
      status:'Lycéen',
      result:'Obtention du baccalauréat S, option Sciences Industrielles, avec mention bien'
    },
    {
      name:'Lycée Lafayette',
      adress:'11 Quai de Seine, 77430 Champagne Sur Seine, France',
      img:imgPath+'/lafayette.png',
      begin:'Septembre 2012',
      beginDate:'201209',
      end:'Juin 2014',
      status:'Étudiant en classe préparatoire, PTSI/PT',
      result:'Admissibilités en écoles d\'ingénieurs, sur dossiers et sur concours'
    },
    {
      name:'Institut d\'ingénierie informatique de Limoges (3iL)',
      adress:'43 rue Sainte Anne, 87000 Limoges, France',
      img:imgPath+'/3il.png',
      begin:'Septembre 2014',
      beginDate:'201409',
      status:'Étudiant en préparation d\'un diplôme d\'ingénieur en informatique',
      result:'En cours, prévision d\'obtention du diplôme courant 2018'
    },
    {
      name:'Université du Québec À Chicoutimi (UQAC)',
      adress:'555 boulevard de l\'université, Chicoutimi, QC G7H 2B1, Canada',
      img:imgPath+'/uqac.png',
      begin:'Août 2016',
      beginDate:'201608',
      status:'Étudiant en préparation d\'un DESS en informatique appliquée en double diplôme',
      result:'En cours, prévision d\'obtention du diplôme courant 2018'
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
})
