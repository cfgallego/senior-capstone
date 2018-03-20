angular.module("app").controller("initialController", ['$scope', 'AppServices', '$http', function ($scope, appServices, $http) {
    var self = this;
    console.log("initial controller");

    $scope.volItem = {};
    $scope.volunteers = [];
    $scope.volSources = [$scope.volunteers];

    // load volunteers from server
    $scope.loadVolunteers = function () {
        appServices.getVolunteers().then(function (response) {
            console.log(response.data);

            for (var i = 0; i < response.data.length; i++) {
                $scope.volItem = {
                    id: response.data[i].VolunteerID,
                    firstName: response.data[i].FirstName,
                    lastName: response.data[i].LastName,
                    email: response.data[i].Email,
                    phoneNumber: response.data[i].PhoneNumber,
                    streetAddress: response.data[i].StreetAddress,
                    city: response.data[i].City,
                    state: response.data[i].State,
                    zipCode: response.data[i].ZipCode
                };
                $scope.volunteers.push($scope.volItem);
            }
        });
    };

    $scope.loadVolunteers();
    console.log($scope.volSources);
}]);