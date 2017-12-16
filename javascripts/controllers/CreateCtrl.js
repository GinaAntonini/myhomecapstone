"use strict";

app.controller("CreateCtrl", function($location, $rootScope, $scope){
    
    $scope.getToCreateANewMaintenanceTask = () => {
        $location.path("/create/newtask");
    };

    $scope.getToCreateANewImprovementProject = () => {
        $location.path("/create/newproject");
    };

    $scope.getBackToDashboard = () => {
        $location.path("/dashboard");
    };
});