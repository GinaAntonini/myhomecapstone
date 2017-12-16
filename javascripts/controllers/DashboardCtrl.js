"use strict";

app.controller("DashboardCtrl", function($location, $rootScope, $scope){

    $scope.getToCreate = () => {
        $location.path("/create");
    };

    $scope.getToMaintenance = () => {
        $location.path("/maintenance");
    };

    $scope.getToImprovements = () => {
        $location.path("/improvements");
    };
    
    $scope.getToCreateANewMaintenanceTask = () => {
        $location.path("/create/newtask");
    };

    $scope.getToCurrentMaintenanceTasksList = () => {
        $location.path("/maintenance/viewtasks");
    };

    $scope.getToSeeTasksBySeason = () => {
        $location.path("/maintenance/seasonalview");
    };

    $scope.getToSearchProducts = () => {
        $location.path("/searchproducts");
    };

    $scope.getToCreateANewImprovementProject = () => {
        $location.path("/create/newproject");
    };

    $scope.getToCurrentImprovementProjectsList = () => {
        $location.path("/improvements/viewprojects");
    };

    $scope.getToSeeProjectsBySeason = () => {
        $location.path("/improvements/seasonalview");
    };
});