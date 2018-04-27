angular.module("app").controller("historyController", ['$scope', 'AppServices', function ($scope, appServices, $http) {
    var self = this;
    self.loadDb = true;

    self.history = [];

    self.loadHistory = function () {
        appServices.getHistory().then(function (response) {
            self.history = response.data;
            self.loadDb = false;

            // pagination
            self.currentPage = 0;
            self.pageSize = 7;

            self.numberOfPages = function () {
                return Math.ceil(self.history.length / self.pageSize); // ceil = rounds up decimal
            }
            console.log(Math.ceil(self.history.length / self.pageSize));
        });
    };

    self.loadHistory();
}]);


// defining startFrom filter. limitTo filter is built-in
angular.module("app").filter('startFrom', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    }
});