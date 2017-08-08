/* jshint esversion:6*/
angular.module('myApp')
.controller('MyController', ['$scope','CharacterVersionFactory', 'mainCharacter', 'BookService', 'Movies', function($scope, CharacterVersionFactory, mainCharacter, BookService, Movies){
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
  $scope.movies = [];
  Movies.getMovies()
  .then((movies) => { $scope.movies = movies; });
}]);