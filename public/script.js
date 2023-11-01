var app = angular.module("myApp", ["ngRoute"]);
// app.config(function ($routeProvider) {
//     $routeProvider
//         .when("/", {
//             templateUrl: "home.html",
//             controller: "homeCtrl"
//         })
//         .when("/introduction", {
//             templateUrl: "introduction.html",
//             controller: "introductionCtrl"
//         })
//         .when("/directive", {
//             templateUrl: "directive.html"
//         })
//         .when("/expression", {
//             templateUrl: "expression.html"
//         });
// });

app.controller('formCtrl', function ($scope) {
    $scope.student_name = "Nehal Patel";
    $scope.student_email = "";
    $scope.student_address = "";
    $scope.student_phone = "";


});