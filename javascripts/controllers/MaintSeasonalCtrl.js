"use strict";

app.controller("MaintSeasonalCtrl", function($http, $location, $rootScope, $scope, TaskService){
    const getTasks = () => {
        TaskService.getCurrentTasksFromFirebase($rootScope.uid).then((results) => {
        $scope.tasks = results;
        $location.url("/maintenance/seasonalview");
    }).catch((err) => {
        console.log("error in getTasks", err);
    });
    };
    getTasks();

    const getSeasonToComplete = (season) => {
        TaskService.getSeasonsFromFirebase(season).then((results) => {
        $scope.tasks = results;
    }).catch((err) => {
        console.log("error in getSeasonToComplete", err);
    });
    }; 
    getSeasonToComplete("Spring");

    $scope.getSeason = (event) => {
        getSeasonToComplete(event.target.value);
    };
});