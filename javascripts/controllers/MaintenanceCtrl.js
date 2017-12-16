"use strict";

app.controller("MaintenanceCtrl", function($location, $rootScope, $scope){
    $scope.getToCreateANewMaintenanceTask = () => {
        $location.path("/create/newtask");
    };

    $scope.getToCurrentMaintenanceTasksList = () => {
        $location.path("/maintenance/viewtasks");
    };

    $scope.getToSeeTasksBySeason = () => {
        $location.path("/maintenance/seasonalview");
    };

    $scope.getToMaintenanceArchives = () => {
        $location.path("/maintenance/archives");
    };
    
    $scope.getBackToDashboard = () => {
        $location.path("/dashboard");
    };

});