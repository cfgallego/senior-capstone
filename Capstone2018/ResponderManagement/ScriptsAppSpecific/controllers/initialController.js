angular.module("app").controller("initialController", ['$scope', 'AppServices', '$http', '$window', '$filter', function ($scope, appServices, $http, $window, $filter) {
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

    // delete volunteer
    $scope.deletePopup = function (id) {
        if ($window.confirm("Do you want to continue deletion?")) {
            console.log("Confirm Delete"); // if ok, delete
            appServices.deleteVolunteer(id);

            // to remove volunteer from view without refreshing
            $scope.volunteers = $filter('filter')($scope.volunteers, { id: '!' + id });
        }
        else
            console.log("Cancel Delete"); // if cancel, return to view
    }

    // update volunteer
    $scope.editVol = function (id) {
        console.log("Edit volunteer");
        // appServices.editVolunteer(id);

        // prefills form?
        for (v in $scope.volunteers) {
            if ($scope.volunteers[v.id] == id) {
                $scope.editedVol = {
                    id: $scope.volunteers[v].id,
                    firstName: $scope.volunteers[v].firstName,
                    lastName: $scope.volunteers[v].lastName,
                    email: $scope.volunteers[v].email,
                    phoneNumber: $scope.volunteers[v].phoneNumber,
                    streetAddress: $scope.volunteers[v].streetAddress,
                    city: $scope.volunteers[v].city,
                    state: $scope.volunteers[v].state,
                    zipCode: $scope.volunteers[v].zipCode
                }
            }
            // $scope.volunteers.push($scope.editedVol);
        }
    }
}]);