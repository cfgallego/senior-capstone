﻿angular.module("app").controller("searchController", ['$scope', 'AppServices', '$http', '$window', '$location', '$filter', '$routeParams', '$rootScope', '$route', function ($scope, appServices, $http, $window, $location, $filter, $routeParams, $rootScope, $route) {
    var self = this;
    console.log("TEST - search");
    self.loadDb = true;

    self.volunteers = [];

    // load volunteers from server
    self.loadVolunteers = function () {
        appServices.getVolunteers().then(function (response) {
            console.log(response.data);

            self.volunteers = response.data;
            console.log(self.volunteers);

            //self.test = false;
            self.loadDb = false;
        });
    };

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
                    // to remove volunteer from table without refreshing - di npud mugana
                    //self.volunteers = $filter('filter')(self.volunteers, { id: '!' + id });
                    self.volunteers.splice(id, 1);
                    //console.log(self.volunteers);

                    appServices.deleteVolunteer(id);

                    swal("Deleted!", "Volunteer has been deleted", "success");
                    console.log("confirm delete");

                    // redirect back to search page
                    //$location.path("/search/");
                    //$route.reload();
                } else {
                    swal("Cancelled", "Volunteer was not deleted", "error");
                    console.log("cancel delete");
                }
                console.log(self.volunteers);
                console.log(isConfirm);
            });
    };

    console.log(self.volunteers);

    // edit volunteer - will redirect to the editVolunteer page, param1 = id
    self.edit = function (param1) {
        console.log(param1);
        $location.path("/editVolunteer/" + param1);
    };

    // seach volunteer by first name or last name or both
    self.searchText = "";
    self.searchName = function () {
        if (self.searchText === "")
            return;

        self.volunteerTable = self.volunteers.filter(function (item) {
            return (item.FirstName.toLowerCase().toString().indexOf(self.searchText) > -1
                || item.LastName.toLowerCase().toString().indexOf(self.searchText) > -1
                || (item.FirstName.toLowerCase().toString() + " " + item.LastName.toLowerCase().toString()).indexOf(self.searchText) > -1
            )
        });
    };

    // search volunteer by emergency
    self.emergencies = [
        { Name: "Fire", EmergencyID: 1, isChecked: false },
        { Name: "Hurricane", EmergencyID: 2, isChecked: false },
        { Name: "Flood", EmergencyID: 3, isChecked: false },
        { Name: "Earthquake", EmergencyID: 4, isChecked: false },
        { Name: "Tornado", EmergencyID: 5, isChecked: false },
        { Name: "Snow Storm", EmergencyID: 6, isChecked: false },
        { Name: "Terrorist", EmergencyID: 7, isChecked: false },
        { Name: "Wildfire", EmergencyID: 8, isChecked: false },
    ];
    console.log(self.emergencies);


    //self.loadEgroup = true;
    self.searchEmergency = function () {
        self.eCount = 0;
        self.selectedEmergencies = [];
        self.emergencyVolunteers = [];
        //self.loadEgroup= true;

        for (var i = 0; i < self.emergencies.length; i++) {
            if (self.emergencies[i].isChecked) {
                self.selectedEmergencies.push({
                    Name: self.emergencies[i].Name,
                    EmergencyID: self.emergencies[i].EmergencyID
                });
                self.eCount++;

                appServices.getVolunteersByEmergency(self.emergencies[i].Name).then(function (response) {
                    console.log(response.data);

                    self.emergencyVolunteers = response.data;
                    console.log(self.emergencyVolunteers);

                    //self.volunteerTable.push(self.emergencyVolunteers.filter(function (item) {
                    //    return item.toString();
                    //}));

                    self.volunteerTable = self.emergencyVolunteers.filter(function (item) {
                        return item.toString();
                    });
                });
            }
        }
        self.loadEgroup = false;
    }


    //// load table on seach button click or enter keypress
    //self.loadTable = false;
    //self.buttonClick = function () {
    //    self.searchName();
    //    self.loadTable = true;
    //    //self.loadDb = false;
    //};


    // set default search by
    self.selectSearch = "name";

    // load table on seach button click or enter keypress if selectSearch = name
    self.loadTable = false;
    self.buttonClick = function () {
        if (self.selectSearch == 'name')
            self.searchName();
        else {
            self.searchEmergency();
            self.loadEgroup = true;
        }

        self.loadTable = true;
        //self.loadDb = false;
    };

    self.loadVolunteers();
}]);