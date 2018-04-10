﻿angular.module("app").controller("searchController", ['$scope', 'AppServices', '$http', '$window', '$location', '$filter', '$routeParams', '$rootScope', function ($scope, appServices, $http, $window, $location, $filter, $routeParams, $rootScope) {
    var self = this;
    console.log("TEST - search");

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


    self.groups = [];
    self.data = { selectedGroups: [] };

    // pang display ra sa group sa search bar
    self.loadGroups = function () {
        appServices.getEmergencies().then(function (response) {
            console.log(response.data);

            self.groups = response.data;
            console.log(self.emergencies);

            self.test = false;
        });
    };

    self.loadGroups();

    // delete volunteer
    self.delete = function (id) {
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
                    //self.volunteers = $filter('filter')(self.volunteers, { id: '!' + id });

                    swal("Deleted!", "Volunteer has been deleted", "success");
                    console.log("confirm delete");
                    //self.loadVolunteers();
                    //self.volunteers = $filter('filter')(self.volunteers, { id: '!' + id });
                } else {
                    swal("Cancelled", "Volunteer was not deleted", "error");
                    console.log("cancel delete");
                }

            });

        //self.loadVolunteers();
        //self.volunteers = $filter('filter')(self.volunteers, { id: '!' + id });
    };

    // edit volunteer
    self.edit = function (param1) {
        console.log(param1);
        $location.path("/editVolunteer/" + param1);
    };

    // seach volunteer by first name or last name but not both
    self.searchText = "";
    self.searchName = function () {
        if (self.searchText == "")
            return;

        //return self.volunteers.filter(function (item) {
        //    return (item.FirstName.toLowerCase().toString().indexOf(self.searchText) > -1 || item.LastName.toLowerCase().indexOf(self.searchText) > -1)

        self.volunteerTable = self.volunteers.filter(function (item) {
            return (item.FirstName.toLowerCase().toString().indexOf(self.searchText) > -1 || item.LastName.toLowerCase().indexOf(self.searchText) > -1)
        });
    };

    // ng-show function for searching groups??

    // load table on seach button click
    self.loadTable = false;
    self.buttonClick = function () {
        self.searchName();
        self.loadTable = true;
    };

    self.loadVolunteers();
}]);