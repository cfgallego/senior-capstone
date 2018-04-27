angular.module("app").controller("editVolController", ['$scope', 'AppServices', '$routeParams', '$rootScope', '$location', function ($scope, appServices, $routeParams, $rootScope, $location) {
    var self = this;
    self.vol = null;
    self.loadDb = true;

    self.skills = [
        { Name: "Fire Safety", SkillID: 1, isChecked: false },
        { Name: "EMS Training", SkillID: 2, isChecked: false },
        { Name: "Lifeguard Training", SkillID: 3, isChecked: false },
        { Name: "First-Aid Training", SkillID: 4, isChecked: false },
        { Name: "Leadership Training", SkillID: 5, isChecked: false },
        { Name: "Redcross Certification", SkillID: 6, isChecked: false }
    ];

    // prefills the form - gets data from selected vol
    self.param1 = $routeParams.param1;

    self.fillForm = function () {
        appServices.getVolunteerByID(self.param1).then(function (response) {
            self.vol = response.data;
            self.loadDb = false;
        }).catch(function (response) {
            swal("ERROR", "message", "error");
        });

    };

    console.log(self.vol);
    self.fillForm();

    // save volunteer information edits
    self.update = function (v) {
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

        appServices.updateVolunteer(req).then(function (response) {
            swal("SUCCESS", "Volunteer information updated!", "success");
            // redirect back to prev page
            $location.path("/search/");
        });
    };

    // phone number pattern ###-###-#### or ##########
    self.phoneNumberPattern = /^\d{3}[- ]?\d{3}[- ]?\d{4}$/;

    // zipcode pattern #####
    self.zipCodePattern = /^\d{5}$/;
}]);