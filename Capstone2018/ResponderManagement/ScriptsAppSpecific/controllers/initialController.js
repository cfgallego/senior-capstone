angular.module("app").controller("initialController", ['$scope', 'AppServices', '$http', '$window', '$filter', '$rootScope', function ($scope, appServices, $http, $window, $filter, $rootScope) {
    var self = this;
    console.log("initial controller");

    $rootScope.id = 0;

    // dire ang logout ibutang
}]);