/* jshint esversion:6*/
angular.module('myApp')
.controller('MyController', ['$scope','CharacterVersionFactory', 'mainCharacter', 'BookService', function($scope, CharacterVersionFactory, mainCharacter, BookService){
  $scope.myFirstName = 'Cooking';
  $scope.myModel = 'Ready player one';
  $scope.character = mainCharacter;
  $scope.cvfResult = CharacterVersionFactory.genCharVersion();
  $scope.BookService = BookService;
  $scope.newBook = { title: '', author: '' };
  $scope.addBook = function() {
    BookService.addBook($scope.newBook);
    $scope.newBook.title = '';
    $scope.newBook.author = '';
  };

}]);