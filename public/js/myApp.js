/* jshint esversion:6*/
var myApp = angular.module('myApp', [/*list of dependencies*/]);


myApp
.config(function(){
    // config
})
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION){
    // initialize
    console.log('running');
    $rootScope.version = APP_VERSION;
}]);