﻿angular.module("app").factory("AppServices", [
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

            //getVolunteerByGroup: function (group) {
            //    return $http.get("api/ResponderManagement/volunteers/getVolunteer?group=" + group);
            //},

            //getVolunteerByName: function (name) {
            //    return $http.get("api/ResponderManagement/volunteers/getVolunteer?name=" + name);
            //},

            // updateVolunteer
            editVolunteer: function (vol) {
                return $http.put("api/ResponderManagement/volunteers/editVolunteer", vol);
            },

            // deleteVolunteer
            deleteVolunteer: function (id) {
                return $http.delete("api/ResponderManagement/volunteers/deleteVolunteer?id=" + id);
            },

            // EmergencyController functions
            getEmergencies: function () {
                return $http.get("api/ResponderManagement/emergencies/getEmergencies");
            },

            // TEST send email
            sendTestEmail: function () {
                return $http.post("api/ResponderManagement/emergencies/sendEmails");
            },

            // SkillController functions
            getSkills: function () {
                return $http.get("api/ResponderManagement/skills/getSkills");
            }
        }
    }]);