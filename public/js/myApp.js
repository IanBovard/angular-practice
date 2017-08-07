/* jshint esversion:6*/
angular.module('myApp', [/*list of dependencies*/]);
let myApp = angular.module('myApp');

myApp
.config(function(){
  //config
})
.controller('MyController', ['$scope', function($scope){
  $scope.myFirstName = 'Cooking';
  $scope.myModel = 'Ready player one';
}])
.run(function(){
  //initialize
  console.log('running');
});

