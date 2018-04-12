angular.module("app").controller("emergencyDetailController", ['$scope', 'AppServices', '$filter', 'dateFilter', function ($scope, appServices, $filter, dateFilter) {
    var self = this;
    console.log("TEST - emergencyDetail");

    self.currentDateTime = new Date();

    //self.$watch('self.currentDateTime', function (date) {
    //    self.message.date = dateFilter(date, 'EEEE, MM/dd/yyyy');
    //    console.log(self.message.date);
    //});

    //self.$watch('self.message.date', function (dateString) {
    //    self.currentDateTime = new Date(dateString);
    //});

    self.message = {};

    self.send = function (v) {
        console.log(v, "TEST - send");
        if (!v)
            return;
        appServices.sendTestEmail().then(function () {
            swal("SUCCESS", "Notification sent!", "success");
        });

        //var newMsg = {
        //    EmailDate: self.message.date,
        //    EmailTime: self.message.time,
        //    StreetAddress: self.message.streetAddress,
        //    City: self.message.city,
        //    Zip: self.message.zip,
        //    Comment: self.message.comment
        //    // Emergency ??
        //};

        //console.log(newMsg);
    }

    // zipcode pattern #####
    self.zipCodePattern = /^\d{5}$/;

    // TEST send email test func
    self.sendTestEmail = function () {
        appServices.sendTestEmail();
    }
}]);