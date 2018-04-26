angular.module("app").controller("historyController", ['$scope', 'AppServices', function ($scope, appServices, $http) {
    var self = this;
    console.log("TEST - history");
    self.loadDb = true;

    self.history = [];

    self.loadHistory = function () {
        appServices.getHistory().then(function (response) {
            console.log(response.data);

            self.history = response.data;
            console.log(self.history);
            self.loadDb = false;

            console.log(self.history.length);


            // pagination
            self.currentPage = 0;
            self.pageSize = 7;

            self.numberOfPages = function () {
                return Math.ceil(self.history.length / self.pageSize);
            }
            console.log(Math.ceil(self.history.length / self.pageSize));
        });
    };

    self.loadHistory();
}]);


// limitTo filter is built-in
angular.module("app").filter('startFrom', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    }
});