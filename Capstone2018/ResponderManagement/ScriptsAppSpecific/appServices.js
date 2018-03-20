angular.module("app").factory("AppServices", [
    '$http', function ($http) {
        return {
            //ListController functions - from Adam's template
            getList: function (listName) {
                return $http.get("api/AngularTemplate/lists/" + listName);
            },

            //MemberController functions - from Adam's template
            getMemberById: function (id) {
                return $http.get("api/AngularTemplate/members/getMember?id=" + id);
            },
            addNewMember: function (request) {
                return $http.post("api/AngularTemplate/members/addMember/", request)
            },


            // michelle
            // VolunteerController functions
            addNewVolunteer: function (request) {
                return $http.post("api/ResponderManagement/volunteers/addVolunteer", request)
            },

            getVolunteers: function () {
                return $http.get("api/ResponderManagement/volunteers/getVolunteers", {
                    cache: true
                });
            },

            //getVolunteerByGroup: function (group) {
            //    return $http.get("api/ResponderManagement/volunteers/getVolunteer?group=" + group);
            //},

            //getVolunteerByName: function (name) {
            //    return $http.get("api/ResponderManagement/volunteers/getVolunteer?name=" + name);
            //}

            // updateVolunteer

            // deleteVolunteer
            deleteVolunteer: function (id) {
                return $http.post("api/ResponderManagement/volunteers/deleteVolunteer?id=" + id);
            }
        }
    }]);