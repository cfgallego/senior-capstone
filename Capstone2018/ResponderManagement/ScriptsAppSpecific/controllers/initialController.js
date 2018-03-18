angular.module("app").controller("initialController", ['$scope', 'AppServices', function ($scope, appServices, $http) {
    var self = this;
    $scope.test = "This is from the parent controller (initialController.js)";
    $scope.var = "This is another $scope variable from the parent controller";
    console.log("initial controller");
}]);