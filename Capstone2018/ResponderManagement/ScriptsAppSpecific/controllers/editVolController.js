angular.module("app").controller("editVolController", ['$scope', 'AppServices', '$routeParams', '$rootScope', function ($scope, appServices, $routeParams, $rootScope) {
    var self = this;
    console.log("TEST - edit volunteer");
    //self.param1 = null;
    self.vol = null;

    self.skills = [
        { Name: "Fire Safety", SkillID: 1, isChecked: false },
        { Name: "EMS Training", SkillID: 2, isChecked: false },
        { Name: "Lifeguard Training", SkillID: 3, isChecked: false },
        { Name: "First-Aid Training", SkillID: 4, isChecked: false },
        { Name: "Leadership Training", SkillID: 5, isChecked: false },
        { Name: "Redcross Certification", SkillID: 6, isChecked: false }
    ];

    //self.trueSkill = {};
    //self.finalSkills = [];

    //self.loadSkills = function () {
    //    appServices.getSkills().then(function (response) {
    //        console.log(response.data);

    //        self.skills = response.data;
    //        console.log(self.skills);

    //        self.test = false;
    //    });
    //};

    //self.loadSkills();

    //var id = $rootScope.id;
    //console.log($rootScope.id);

    // prefills the form
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

    // save volunteer information edits
    self.update = function (v) {
        console.log("TEST - update");
        if (!v)
            return;

        self.sCount = 0;
        self.selectedSkills = [];
        for (var i = 0; i < self.skills.length; i++) {
            if (self.skills[i].isChecked) {
                self.selectedSkills.push({
                    Name: self.skills[i].Name,
                    SkillID: self.skills[i].SkillID
                });
                self.sCount++;
            }
        }
        console.log(self.selectedSkills);

        if (v && (self.sCount === 0))
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
            ZipCode: self.vol.ZipCode,
            Skills: self.selectedSkills
        };

        console.log(req);

        appServices.editVolunteer(req).then(function (response) {
            swal("SUCCESS", "Volunteer information updated!", "success");
            console.log(response);
            // redirect back to prev page?
        });
    };

    // phone number pattern ###-###-#### or ##########
    self.phoneNumberPattern = /^\d{3}[- ]?\d{3}[- ]?\d{4}$/;

    // zipcode pattern #####
    self.zipCodePattern = /^\d{5}$/;

    //self.back = function () {
    //    console.log("TEST - cancel update")
    //};
}]);