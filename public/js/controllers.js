/* jshint esversion:6*/
angular.module('myApp')
.controller('MyController', ['$scope', 'mainCharacter', function($scope, mainCharacter){
  $scope.myFirstName = 'Cooking';
  $scope.myModel = 'Ready player one';
  $scope.character = mainCharacter;

}]);