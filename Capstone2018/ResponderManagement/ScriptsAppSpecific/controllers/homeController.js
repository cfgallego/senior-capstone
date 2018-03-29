angular.module("app").controller("homeController", ['$scope', 'AppServices', function ($scope, appServices, $http) {
    var self = this;
    console.log("TEST - home");

    self.test = true;
    self.emergencies = [];

    self.loadEmergencies = function () {
        appServices.getEmergencies().then(function (response) {
            console.log(response.data);

            self.emergencies = response.data;
            console.log(self.emergencies);

            self.test = false;
        });
    };

    self.loadEmergencies();
}]);