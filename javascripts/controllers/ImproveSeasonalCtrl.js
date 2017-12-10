"use strict";

app.controller("ImproveSeasonalCtrl", function($location, $rootScope, $scope, ProjectService){
    const getProjects = () => {
        ProjectService.getCurrentProjectsFromFirebase($rootScope.uid).then((results) => {
        $scope.projects = results;
        $location.url("/improvements/seasonalview");
    }).catch((err) => {
        console.log("error in getProjects", err);
    });
    };

    const getSeasonToComplete = (season) => {
        ProjectService.getSeasonsFromFirebase(season).then((results) => {
        $scope.projects = results;
    }).catch((err) => {
        console.log("error in getSeasonToComplete", err);
    });
    }; 
    getSeasonToComplete("Spring");

    $scope.getProjectsInSeason = (event) => {
        getSeasonToComplete(event.target.value);
    };
});