var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', function($scope, $http) {

    console.log("Hello World from controller.js");
    $http.get('/contactlist')

person1 = {
name:'ahmad',
email:'ahmad@gmail.com',
number:'0598972598'
};
person2 = {
name:'ahmad1',
email:'ahmad1@gmail.com',
number:'10598972598'
};
person3 = {
name:'ahmad2',
email:'ahmad2@gmail.com',
number:'20598972598'
};
var contactlist=[person1,person2,person3];

$scope.contactlist=contactlist;

console.log($scope.contactlist);
});