angular.module("app").controller("addVolController", ['$scope', 'AppServices', '$window', function ($scope, appServices, $window) {
    var self = this;
    console.log("TEST - addVolunteer");

    self.volunteer = {};
    //self.skills = [];
    //self.test = true;
    //self.volunteer.state = null;

    self.selectedSkills = [
        { Name: "Fire Safety", SkillID: 1, isChecked: false },
        { Name: "EMS Training", SkillID: 2, isChecked: false },
        { Name: "Lifeguard Training", SkillID: 3, isChecked: false },
        { Name: "First-Aid Training", SkillID: 4, isChecked: false },
        { Name: "Leadership Training", SkillID: 5, isChecked: false },
        { Name: "Redcross Certification", SkillID: 6, isChecked: false }
    ];

    self.trueSkill = {};
    self.finalSkills = [];

    //self.loadSkills = function () {
    //    appServices.getSkills().then(function (response) {
    //        console.log(response.data);

    //        self.skills = response.data;
    //        console.log(self.skills);

    //        self.test = false;
    //    });
    //};

    //self.loadSkills();

    self.submitForm = function (v) {
        console.log(v, "TEST - submitForm");
        if (!v)
            return;

        self.finalSkills = [];
        for (var i = 0; i < self.selectedSkills.length; i++) {
            if (self.selectedSkills[i].isChecked) {
                self.finalSkills.push({
                    Name: self.selectedSkills[i].Name,
                    SkillID: self.selectedSkills[i].SkillID
                });
            }
        }
        console.log(self.finalSkills);

        var newReq = {
            FirstName: self.volunteer.firstName,
            LastName: self.volunteer.lastName,
            PhoneNumber: self.volunteer.phoneNumber,
            Email: self.volunteer.email,
            StreetAddress: self.volunteer.streetAddress,
            City: self.volunteer.city,
            State: self.volunteer.state,
            ZipCode: self.volunteer.zipCode,
            Skills: self.finalSkills
        };

        console.log(newReq);
        appServices.addNewVolunteer(newReq).then(function (response) {
            self.volunteer = {};
            swal("SUCCESS", "Volunteer added!", "success");
            console.log(response);
        });
    };

    // phone number pattern ###-###-#### or ##########
    self.phoneNumberPattern = /^\d{3}[- ]?\d{3}[- ]?\d{4}$/;

    // zipcode pattern #####
    self.zipCodePattern = /^\d{5}$/;
}]);
