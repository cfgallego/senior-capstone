angular.module("app").controller("homeController", ['$scope', 'AppServices', function ($scope, appServices, $http) {
    var self = this;
    self.text = "HELLO WORLD";
    self.text2 = "My name is Adam. Welcome to AngularJS!!";
    $scope.begin = "Lets Begin";

    var colorList = function () {
        appServices.getList("colors").then(function (response) {
            self.colors = response.data;
            console.log(self.colors);
        })
    };

    colorList();
}]);