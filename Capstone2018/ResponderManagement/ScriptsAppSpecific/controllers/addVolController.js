angular.module("app").controller("addVolController", ['$scope', 'AppServices', '$window', function ($scope, appServices, $window) {
    var self = this
    console.log("TEST - addVolunteer");

    self.volunteer = {};
    self.skills = [];
    self.test = true;

    self.loadSkills = function () {
        appServices.getSkills().then(function (response) {
            console.log(response.data);

            self.skills = response.data;
            console.log(self.skills);

            self.test = false;
        });
    };

    self.loadSkills();

    self.submitForm = function (v) {
        console.log(v, "TEST - submitForm");
        if (!v)
            return;
        var newReq = {
            FirstName: self.volunteer.firstName,
            LastName: self.volunteer.lastName,
            PhoneNumber: self.volunteer.phoneNumber,
            Email: self.volunteer.email,
            StreetAddress: self.volunteer.streetAddress,
            City: self.volunteer.city,
            State: self.volunteer.state,
            ZipCode: self.volunteer.zipCode,
            // Skills?
        };

        console.log(newReq);
        appServices.addNewVolunteer(newReq).then(function (response) {
            self.volunteer = {};
            //$window.alert("Volunteer added!");
            swal("SUCCESS", "Volunteer added!", "success");
            console.log(response);
        });
    };
}]);
