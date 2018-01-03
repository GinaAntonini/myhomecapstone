"use strict";

app.controller("ImprovementsCtrl", function($location, $rootScope, $scope){
    $scope.getToSeeProjectMaterials = () => {
        $location.path("/improvements/materials");
    };

    $scope.getToCurrentImprovementProjectsList = () => {
        $location.path("/improvements/viewprojects");
    };

    $scope.getToSeeProjectsBySeason = () => {
        $location.path("/improvements/seasonalview");
    };
    
    $scope.getToProjectArchives = () => {
        $location.path("/improvements/archives");
    };
    
    $scope.getBackToDashboard = () => {
        $location.path("/dashboard");
    };
});