angular.module("app").controller("addVolController", ['$scope', 'AppServices', '$window', function ($scope, appServices, $window) {
    var self = this
    console.log("TEST - addVolunteer");

    self.volunteer = {};
    self.skills = [];
    self.test = true;

    self.selectedSkills = [
        { Name: "EMS Training", isChecked: false },
        { Name: "Fire Safety", isChecked: false },
        { Name: "First-Aid Training", isChecked: false },
        { Name: "Leadership Training", isChecked: false },
        { Name: "Lifeguard Training", isChecked: false },
        { Name: "Redcross Certification", isChecked: false }
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
            console.log("test 1");
            if (self.selectedSkills[i].isChecked) {
                console.log("test 2");
                self.finalSkills.push({
                    Name: self.selectedSkills[i].Name
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
            // Skills?
            Skills: {
                //EMS: { Name: self.finalSkills.length > 0 ? self.finalSkills[0].Name : undefined },
                //FireSafety: { Name: self.finalSkills.length > 1 ? self.finalSkills[1].Name : undefined },
                //FirstAid: { Name: self.finalSkills.length > 2 ? self.finalSkills[2].Name : undefined },
                //Leadership: { Name: self.finalSkills.length > 3 ? self.finalSkills[3].Name : undefined },
                //Lifeguard: { Name: self.finalSkills.length > 4 ? self.finalSkills[4].Name : undefined },
                //Redcross: { Name: self.finalSkills.length > 5 ? self.finalSkills[5].Name : undefined },

                EMS: { Name: self.finalSkills[0] ? self.finalSkills[0].Name : undefined },
                FireSafety: { Name: self.finalSkills[1] ? self.finalSkills[1].Name : undefined },
                FirstAid: { Name: self.finalSkills[2] ? self.finalSkills[2].Name : undefined },
                Leadership: { Name: self.finalSkills[3] ? self.finalSkills[3].Name : undefined },
                Lifeguard: { Name: self.finalSkills[4] ? self.finalSkills[4].Name : undefined },
                Redcross: { Name: self.finalSkills[5] ? self.finalSkills[5].Name : undefined }
            }

            //EmsTraining: "EMS Training" ? self.selectedSkills.Ems.isChecked : null,
            //FireSafety: self.selectedSkills.Fire.isChecked,
            //FirstAidTraining: self.selectedSkills.FirstAid.isChecked,
            //LeadershipTraining: self.selectedSkills.Leadership.isChecked,
            //LifeguardTraining: self.selectedSkills.Lifeguard.isChecked,
            //RedcrossCertification: self.selectedSkills.Redcross.isChecked
        };

        console.log(newReq);
        appServices.addNewVolunteer(newReq).then(function (response) {
            self.volunteer = {};
            //$window.alert("Volunteer added!");
            swal("SUCCESS", "Volunteer added!", "success");
            console.log(response);
        });
    };

    // phone number pattern ###-###-#### or ##########
    self.phoneNumberPattern = /^\d{3}[- ]?\d{3}[- ]?\d{4}$/;

    // zipcode pattern #####
    self.zipCodePattern = /^\d{5}$/;

    self.testModel = {};

    $scope.$watchCollection('self.selectedSkills', function () {
        self.checkResults = [];
        angular.forEach(self.selectedSkills, function (value, key) {
            if (value) {
                self.checkResults.push(key);
            }
        });
    });
}]);
