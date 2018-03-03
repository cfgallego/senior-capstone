angular.module("app").controller("route1Controller", ['$scope', 'AppServices', '$http', function ($scope, appServices, $http) {
    var self = this;
    self.names = {
        WebDev: "Adam",
        Programming: "Mitchell",
        Cyber: "Thomas",
        President: "Blake",
        VicePresident: "Jeremy"
    };
    self.data = {
        "Name": "Adam Perry",
        "Age": "29",
        "School": "Augusta University",
        "Major": "Computer Science"
    };

    var member = function () {
        appServices.getMemberById("1").then(function (response) {
            self.member = response.data;
            console.log(self.member);
        })
    };

    member();
    //console.log(self.names);
    //console.log(self.data);
}]);