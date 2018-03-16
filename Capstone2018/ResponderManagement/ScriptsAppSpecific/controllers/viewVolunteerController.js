//angular.module("app").controller("viewVolunteerController", ['$scope', 'AppServices', '$http', function ($scope, appServices, $http) {
//    var self = this;
//}]);


angular.module("app").controller("viewVolunteerController", ['$scope', 'AppServices', function ($scope, appServices, $http) {
    var self = this;

    self.testData = [
        {
            VolunteerID: 1,
            FirstName: "Bob",
            LastName: "Thomas",
            PhoneNumber: "7062941864",
            StreetAddress: "2415 Main Street",
            City: "Augusta",
            State: "GA",
            ZipCode: "30909",
            Email: "email90@gmail.com"
        },
        {
            VolunteerID: 2,
            FirstName: "Alexa",
            LastName: "Fox",
            PhoneNumber: "7062944864",
            StreetAddress: "241 Main Street",
            City: "Augusta",
            State: "GA",
            ZipCode: "30909",
            Email: "email84@gmail.com"
        },
        {
            VolunteerID: 3,
            FirstName: "Edward",
            LastName: "Wilson",
            PhoneNumber: "7068332659",
            StreetAddress: "215 Main Street",
            City: "Augusta",
            State: "GA",
            ZipCode: "30859",
            Email: "email92@gmail.com"
        },
        {
            VolunteerID: 4,
            FirstName: "Renee",
            LastName: "Watkins",
            PhoneNumber: "70654862589",
            StreetAddress: "415 Main Street",
            City: "Augusta",
            State: "GA",
            ZipCode: "30909",
            Email: "email75@gmail.com"
        }
    ];

    self.gridOptions = {
        enableFiltering: true,
        data: 'self.testData',
        columnDefs: [
            { name: 'VolunteerID' },
            { name: 'FirstName' },
            { name: 'LastName' },
            { name: 'PhoneNumber' },
            { name: 'StreetAddress' },
            { name: 'City' },
            { name: 'State' },
            { name: 'ZipCode' },
            { name: 'Email' }
        ]
    };
}]);