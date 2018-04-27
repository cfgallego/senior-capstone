angular.module("app").controller("homeController", ['$scope', 'AppServices', '$location', '$filter', function ($scope, appServices, $location, $filter) {
    var self = this;
    self.emergencyDetail = false;

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

    // if valid, shows the emergency detail form
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

        self.emergencyDetail = true;

        self.currentDate = $filter('date')(new Date(), "MM/dd/yyyy");
        //self.currentDate = $filter('date')(new Date(), "EEEE, MM/dd/yyyy");

        self.currentTime = $filter('date')(new Date(), "hh:mm a");

        // make the list of selected emergency names
        self.emergencyList = [];
        for (var i = 0; i < self.selectedEmergencies.length; i++) {
            self.emergencyList.push(self.selectedEmergencies[i].Name);
        }
        self.eList = self.emergencyList.toString();

        // send the message
        self.send = function (v) {
            console.log(v, "TEST - send");
            if (!v)
                return;

            var newMsg = {
                EmergencyDate: self.currentDate,
                EmergencyTime: self.currentTime,
                StreetAddress: self.message.streetAddress,
                City: self.message.city,
                State: self.message.state,
                Zip: self.message.zip,
                Comment: self.message.comment,
                Emergency: self.eList // emergency list
            };

            // saves message to the database
            appServices.newMessage(newMsg).then(function (response) {
                console.log(response);
            });

            // sends email to volunteers
            appServices.sendEmail(newMsg).then(function () {
                swal("SUCCESS", "Notification sent!", "success");
                $location.path("/home/");
            });
        }

        // zipcode pattern #####
        self.zipCodePattern = /^\d{5}$/;
    };
}]);