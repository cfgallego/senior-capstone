﻿angular.module("app").controller("homeController", ['$scope', 'AppServices', '$location', '$filter', 'Fact', function ($scope, appServices, $location, $filter, Fact) {
    var self = this;
    console.log("TEST - home");

    self.emergencyDetail = false;

    //self.test = true;
    //self.emergencies = [];

    //self.loadEmergencies = function () {
    //    appServices.getEmergencies().then(function (response) {
    //        console.log(response.data);

    //        self.emergencies = response.data;
    //        console.log(self.emergencies);

    //        self.test = false;
    //    });
    //};

    //self.loadEmergencies();


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

    // passing data?
    //self.fact = Fact;

    self.proceed = function () {
        self.eCount = 0;
        self.selectedEmergencies = [];

        for (var i = 0; i < self.emergencies.length; i++) {
            if (self.emergencies[i].isChecked) {
                self.selectedEmergencies.push({
                    Name: self.emergencies[i].Name,
                    EmergencyID: self.emergencies[i].EmergencyID
                });
                self.eCount++;
            }
        }
        console.log(self.selectedEmergencies);
        console.log(self.eCount);

        if (self.eCount === 0)
            return;

        // passing data?
        //Fact.setEmergencies(self.selectedEmergencies);

        //$location.path("/emergencyDetail/");
        self.emergencyDetail = true;

        self.currentDate = $filter('date')(new Date(), "MM/dd/yyyy");
        //self.currentDate = $filter('date')(new Date(), "EEEE, MM/dd/yyyy");
        console.log(self.currentDate);

        self.currentTime = $filter('date')(new Date(), "hh:mm a");
        console.log(self.currentTime);

        //console.log(self.selectedEmergencies[0].Name);
        self.emergencyList = [];
        for (var i = 0; i < self.selectedEmergencies.length; i++) {
            self.emergencyList.push(self.selectedEmergencies[i].Name);
            //console.log(self.selectedEmergencies[i].Name);
        }
        console.log(self.emergencyList);
        self.eList = self.emergencyList.toString();
        console.log(self.eList);



        self.send = function (v) {
            console.log(v, "TEST - send");
            if (!v)
                return;

            var newMsg = {
                EmergencyDate: self.currentDate, //self.message.date,
                EmergencyTime: self.currentTime,
                StreetAddress: self.message.streetAddress,
                City: self.message.city,
                State: self.message.state,
                Zip: self.message.zip,
                Comment: self.message.comment,
                // Emergency ??
                Emergency: self.eList
            };
            //console.log(newMsg);

            appServices.newMessage(newMsg).then(function (response) {
                //self.message = {};
                //swal("SUCCESS", "Volunteer added!", "success");
                console.log(response);
            });

            appServices.sendEmail(newMsg).then(function () {
                swal("SUCCESS", "Notification sent!", "success");
                $location.path("/home/");
            });
        }

        // zipcode pattern #####
        self.zipCodePattern = /^\d{5}$/;
    };
}]);