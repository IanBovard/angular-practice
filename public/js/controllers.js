/* jshint esversion:6*/
angular.module('myApp')
.controller('MyController', ['$scope','CharacterVersionFactory', 'mainCharacter', function($scope, CharacterVersionFactory, mainCharacter){
  $scope.myFirstName = 'Cooking';
  $scope.myModel = 'Ready player one';
  $scope.character = mainCharacter;
  $scope.cvfResult = CharacterVersionFactory.genCharVersion();

}]);