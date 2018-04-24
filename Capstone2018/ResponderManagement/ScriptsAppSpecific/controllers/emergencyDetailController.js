angular.module("app").controller("emergencyDetailController", ['$scope', 'AppServices', '$filter', '$routeParams', '$location', 'Fact', function ($scope, appServices, $filter, $routeParams, $location, Fact) {
    var self = this;
    console.log("TEST - emergencyDetail");

    self.currentDate = $filter('date')(new Date(), "MM/dd/yyyy");
    //self.currentDate = $filter('date')(new Date(), "EEEE, MM/dd/yyyy");
    console.log(self.currentDate);

    self.currentTime = $filter('date')(new Date(), "hh:mm a");
    console.log(self.currentTime);

    self.message = {};

    // getting data from home?
    self.fact = Fact;
    console.log(self.fact);

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
            Emergency: "Hurricane"
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

    // TEST send email test func
    //self.sendTestEmail = function () {
    //    appServices.sendTestEmail();
    //}

    //self.param1 = $routeParams.param1;
    //console.log(self.param1);
}]);