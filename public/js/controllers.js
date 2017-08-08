/* jshint esversion:6*/
angular.module('myApp')
.controller('MyController', ['$scope','CharacterVersionFactory', 'mainCharacter', 'BookService', function($scope, CharacterVersionFactory, mainCharacter, BookService){
  $scope.myFirstName = 'Cooking';
  $scope.myModel = 'Ready player one';
  $scope.character = mainCharacter;
  $scope.cvfResult = CharacterVersionFactory.genCharVersion();
  $scope.books = BookService.getBooks();

}]);