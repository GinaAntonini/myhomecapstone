"use strict";

app.controller("MaintenanceCtrl", function($location, $rootScope, $scope){
    $scope.getToSeeMaintenanceMaterials = () => {
        $location.path("/maintenance/materials");
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