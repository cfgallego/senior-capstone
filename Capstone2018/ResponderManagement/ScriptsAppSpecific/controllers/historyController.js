angular.module("app").controller("historyController", ['$scope', 'AppServices', function ($scope, appServices, $http) {
    var self = this;
    console.log("TEST - history");

    self.history = [];

    self.loadHistory = function () {
        appServices.getHistory().then(function (response) {
            console.log(response.data);

            self.history = response.data;
            console.log(self.history);
        });
    };

    self.loadHistory();
}]);