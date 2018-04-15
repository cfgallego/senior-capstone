angular.module("app").controller("homeController", ['$scope', 'AppServices', '$location', function ($scope, appServices, $location) {
    var self = this;
    console.log("TEST - home");

    //self.test = true;
    //self.emergencies = [];

    //self.loadEmergencies = function () {
    //    appServices.getEmergencies().then(function (response) {
    //        console.log(response.data);

    //        self.emergencies = response.data;
    //        console.log(self.emergencies);

    //        self.test = false;
    //    });
    //};

    //self.loadEmergencies();


    self.emergencies = [
        { Name: "Fire", EmergencyID: 1, isChecked: false },
        { Name: "Hurricane", EmergencyID: 2, isChecked: false },
        { Name: "Flood", EmergencyID: 3, isChecked: false },
        { Name: "Earthquake", EmergencyID: 4, isChecked: false },
        { Name: "Tornado", EmergencyID: 5, isChecked: false },
        { Name: "Snow Storm", EmergencyID: 6, isChecked: false },
        { Name: "Terrorist", EmergencyID: 7, isChecked: false },
        { Name: "Wildfire", EmergencyID: 8, isChecked: false },
    ];
    console.log(self.emergencies);

    self.proceed = function () {
        self.eCount = 0;
        self.selectedEmergencies = [];

        for (var i = 0; i < self.emergencies.length; i++) {
            if (self.emergencies[i].isChecked) {
                self.selectedEmergencies.push({
                    Name: self.emergencies[i].Name,
                    EmergencyID: self.emergencies[i].EmergencyID
                });
                self.eCount++;
            }
        }
        console.log(self.selectedEmergencies);
        console.log(self.count);

        if (self.eCount == 0)
            return;

        $location.path("/emergencyDetail/");
    };
}]);