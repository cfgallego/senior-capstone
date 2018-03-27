angular.module("app").controller("viewVolunteerController", ['$scope', 'AppServices', '$http', '$window', '$location', '$filter', '$routeParams', '$rootScope', function ($scope, appServices, $http, $window, $location, $filter, $routeParams, $rootScope) {
    var self = this;
    console.log("TEST - viewVolunteer");

    self.test = true;
    self.volunteers = [];

    // load volunteers from server
    self.loadVolunteers = function () {
        appServices.getVolunteers().then(function (response) {
            console.log(response.data);

            self.volunteers = response.data;
            console.log(self.volunteers);

            self.test = false;
        });
    };

    // delete volunteer
    self.delete = function (id) {
        //if ($window.confirm("Do you want to continue deletion?")) {
        //    console.log("Confirm Delete"); // if ok, delete
        //    appServices.deleteVolunteer(id);

        //    // to remove volunteer from view without refreshing - di npud mugana
        //    self.volunteers = $filter('filter')(self.volunteers, { id: '!' + id });
        //}
        //else
        //    console.log("Cancel Delete"); // if cancel, return to view
        console.log(id);
        // sweet alert
        swal({
            title: "Are you sure?",
            text: "Volunteer will be deleted",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: false
        },
            function (isConfirm) {
                if (isConfirm) {
                    appServices.deleteVolunteer(id);

                    // to remove volunteer from table without refreshing - di npud mugana
                    self.volunteers = $filter('filter')(self.volunteers, { id: '!' + id });

                    swal("Deleted!", "Volunteer has been deleted", "success");
                    console.log("confirm delete");
                } else {
                    swal("Cancelled", "Volunteer was not deleted", "error");
                    console.log("cancel delete");
                }
            });
    }

    self.edit = function (param1) {
        console.log(param1);
        $location.path("/editVolunteer/" + param1);
    }

    self.loadVolunteers();
}]);