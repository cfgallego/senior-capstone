angular.module("app").controller("editVolController", ['$scope', 'AppServices', '$routeParams', '$rootScope', function ($scope, appServices, $routeParams, $rootScope) {
    var self = this;
    //self.param1 = null;
    self.vol = null;

    console.log("TEST - edit volunteer");

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

    self.fillForm();
}]);