angular.module("app").controller("addVolController", ['$scope', 'AppServices', '$window', '$location', '$route', function ($scope, appServices, $window, $location, $route) {
    var self = this;
    self.volunteer = {};

    self.skills = [
        { Name: "Fire Safety", SkillID: 1, isChecked: false },
        { Name: "EMS Training", SkillID: 2, isChecked: false },
        { Name: "Lifeguard Training", SkillID: 3, isChecked: false },
        { Name: "First-Aid Training", SkillID: 4, isChecked: false },
        { Name: "Leadership Training", SkillID: 5, isChecked: false },
        { Name: "Redcross Certification", SkillID: 6, isChecked: false }
    ];

    self.submitForm = function (v) {
        console.log(v, "TEST - submitForm");
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
        console.log(self.sCount);

        if (v && (self.sCount === 0))
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
            Skills: self.selectedSkills
        };

        console.log(newReq);
        appServices.addNewVolunteer(newReq).then(function (response) {
            swal("SUCCESS", "Volunteer added!", "success");
            console.log(response);
            $route.reload();
        });
    };

    // phone number pattern ###-###-#### or ##########
    self.phoneNumberPattern = /^\d{3}[- ]?\d{3}[- ]?\d{4}$/;

    // zipcode pattern #####
    self.zipCodePattern = /^\d{5}$/;
}]);
