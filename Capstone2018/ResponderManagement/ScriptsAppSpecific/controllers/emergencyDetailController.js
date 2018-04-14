angular.module("app").controller("emergencyDetailController", ['$scope', 'AppServices', '$filter', 'dateFilter', function ($scope, appServices, $filter, dateFilter) {
    var self = this;
    console.log("TEST - emergencyDetail");

    self.currentDate = $filter('date')(new Date(), "EEEE, MM/dd/yyyy");
    console.log(self.currentDate);

    self.currentTime = $filter('date')(new Date(), "HH:mm a");
    console.log(self.currentTime);

    self.message = {};

    self.send = function (v) {
        console.log(v, "TEST - send");
        if (!v)
            return;
        appServices.sendTestEmail().then(function () {
            swal("SUCCESS", "Notification sent!", "success");
        });

        var newMsg = {
            EmailDate: self.currentDate, //self.message.date,
            EmailTime: self.currentTime,
            StreetAddress: self.message.streetAddress,
            City: self.message.city,
            State: self.message.state,
            Zip: self.message.zip,
            Comment: self.message.comment
            // Emergency ??
        };
        //console.log(newMsg);
    }

    // zipcode pattern #####
    self.zipCodePattern = /^\d{5}$/;

    // TEST send email test func
    //self.sendTestEmail = function () {
    //    appServices.sendTestEmail();
    //}
}]);