angular.module("app").controller("editVolController", ['$scope', 'AppServices', '$routeParams', '$rootScope', function ($scope, appServices, $routeParams, $rootScope) {
    var self = this;
    console.log("TEST - edit volunteer");
    //self.param1 = null;
    self.vol = null;

    self.loadSkills = function () {
        appServices.getSkills().then(function (response) {
            console.log(response.data);

            self.skills = response.data;
            console.log(self.skills);

            self.test = false;
        });
    };

    self.loadSkills();

    //var id = $rootScope.id;
    //console.log($rootScope.id);

    self.param1 = $routeParams.param1;
    console.log(self.param1);
    //self.param1 = $route.current.param1;


    self.fillForm = function () {
        appServices.getVolunteerByID(self.param1).then(function (response) {
            self.vol = response.data;
            console.log(self.vol.FirstName);
        }).catch(function (response) {
            swal("ERROR", "message", "error");
        });

    };

    console.log(self.vol);
    self.fillForm();

    self.update = function (v) {

        console.log("TEST - update");
        if (!v)
            return;
        var req = {
            VolunteerID: self.vol.VolunteerID,
            FirstName: self.vol.FirstName,
            LastName: self.vol.LastName,
            PhoneNumber: self.vol.PhoneNumber,
            Email: self.vol.Email,
            StreetAddress: self.vol.StreetAddress,
            City: self.vol.City,
            State: self.vol.State,
            ZipCode: self.vol.ZipCode
        };

        console.log(req);

        appServices.editVolunteer(req).then(function (response) {
            swal("SUCCESS", "Volunteer information updated!", "success");
            console.log(response);
            // redirect back to prev page?
        });
    };

    //self.back = function () {
    //    console.log("TEST - cancel update")
    //};
}]);