angular.module("app").factory("AppServices", [
    '$http', function ($http) {
        return {
            // VolunteerController functions
            addNewVolunteer: function (newVol) {
                return $http.post("api/ResponderManagement/volunteers/addVolunteer", newVol);
            },
            getVolunteers: function () {
                return $http.get("api/ResponderManagement/volunteers/getVolunteers");
            },
            getVolunteerByID: function (id) {
                return $http.get("api/ResponderManagement/volunteers/getVolunteerByID?id=" + id);
            },
            getVolunteersByEmergency: function (emergency) {
                return $http.get("api/ResponderManagement/volunteers/GetVolunteersByEmergency?emergency=" + emergency);
            },
            updateVolunteer: function (vol) {
                return $http.put("api/ResponderManagement/volunteers/updateVolunteer", vol);
            },
            deleteVolunteer: function (id) {
                return $http.delete("api/ResponderManagement/volunteers/deleteVolunteer?id=" + id);
            },

            // EmergencyController functions
            getEmergencies: function () {
                return $http.get("api/ResponderManagement/emergencies/getEmergencies");
            },
            sendEmail: function (msg) {
                return $http.post("api/ResponderManagement/emergencies/sendEmails", msg);
            },

            // SkillController functions
            getSkills: function () {
                return $http.get("api/ResponderManagement/skills/getSkills");
            },

            // HistoryController functions
            newMessage: function (msg) {
                return $http.post("api/ResponderManagement/history/newMessage", msg);
            },
            getHistory: function () {
                return $http.get("api/ResponderManagement/history/getHistory");
            }
        }
    }
]);
