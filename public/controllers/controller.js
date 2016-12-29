var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl',['$scope','$http' , function($scope,$http) {
console.log("Hello World from controller.js");

    var refresh=function(){
    $http.get('/contactlist').then(function successCallback(response){
    console.log("I got the data I requested it is below");
     $scope.contactlist=response.data;
     console.log($scope.contactlist);
    },
       function errorCallback(response) {
       // called asynchronously if an error occurs
       // or server returns response with an error status.
       console.log("Error , I did not  got the data I requested from server");
       }

    );
    };
    refresh();

}]);﻿