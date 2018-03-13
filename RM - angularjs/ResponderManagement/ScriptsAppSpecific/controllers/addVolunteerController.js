//angular.module("app").controller("addVolunteerController", ['$scope', 'AppServices', '$http', '$location', function ($scope, appServices, $http, $location) {
//    var self = this;
//    self.lesson = "This page will use Directives!";
//    self.member = {};

//    self.submitForm = function (v) {
//        if (!v)
//            return;
//        var newReq = {
//            FirstName: self.member.firstName,
//            LastName: self.member.lastName,
//            PhoneNumber: self.member.phone,
//            Major: self.member.major
//        };
//        console.log(newReq);
//        appServices.addNewMember(newReq).then(function () {
//            self.member = {};
//        });

//    };
//}]);


angular.module("app").controller("addVolunteerController", ['$scope', 'AppServices', function ($scope, appServices, $http) {
    var self = this;
}]);