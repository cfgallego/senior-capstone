//angular.module("app").controller("viewVolunteerController", ['$scope', 'AppServices', '$http', function ($scope, appServices, $http) {
//    var self = this;
//}]);


angular.module("app").controller("viewVolunteerController", ['$scope', 'AppServices', '$http', '$window', function ($scope, appServices, $http, $window) {
    var self = this;
    console.log("TEST - viewVolunteer");

    $scope.deletePopup = function () {
        //$window.alert("Do you want to continue deletion?");
        if ($window.confirm("Do you want to continue deletion?"))
        {
            console.log("Confirm Delete"); // if ok, delete
            // call appServices...
        }
        else
            console.log("Cancel Delete"); // if cancel, return to view
    }

    //$scope.deletePopup = function () {
    //    SweetAlert.swal({
    //        title: "Are you sure?",
    //        text: "Your will not be able to recover this imaginary file!",
    //        type: "warning",
    //        showCancelButton: true,
    //        confirmButtonColor: "#DD6B55",
    //        confirmButtonText: "Yes, delete it!",
    //        closeOnConfirm: false
    //    },
    //        function () {
    //            SweetAlert.swal("Booyah!");
    //        });
    //}
}]);