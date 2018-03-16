angular.module("app", ["ngRoute", "ngAnimate", "ui.bootstrap"]).config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/",
        {
            templateUrl: "ViewsClient/home.html",
            controller: "homeController",
            controllerAs: "self"
        })

        .when("/addVolunteer",
        {
            templateUrl: "ViewsClient/addVolunteer.html",
            controller: "addVolController",
            controllerAs: "self"
        })

        .when("/viewVolunteer",
        {
            templateUrl: "ViewsClient/viewVolunteer.html",
            controller: "viewVolunteerController",
            controllerAs: "self"
        })

        .when("/search",
        {
            templateUrl: "ViewsClient/search.html",
            controller: "searchController",
            controllerAs: "self"
        })

        .when("/history",
        {
            templateUrl: "ViewsClient/history.html",
            controller: "historyController",
            controllerAs: "self"
        })

        .when("/login",
        {
            templateUrl: "ViewsClient/login.html",
            controller: "loginController",
            controllerAs: "self"
        })

        .when("/emergencyDetail",
        {
            templateUrl: "ViewsClient/emergencyDetail.html",
            controller: "emergencyDetailController",
            controllerAs: "self"
        })

        .when("/searchResult",
        {
            templateUrl: "ViewsClient/searchResult.html",
            controller: "searchResultController",
            controllerAs: "self"
        })


        .otherwise({
            redirectTo: "/"
        });

    $locationProvider.html5Mode({
        enabled: true,
        requiredBase: true
    });
}]);