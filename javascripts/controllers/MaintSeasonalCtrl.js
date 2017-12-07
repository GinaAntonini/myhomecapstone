"use strict";

app.controller("MaintSeasonalCtrl", function($http, $location, $rootScope, $scope, TaskService){
    const getTasks = () => {
        TaskService.getCurrentTasksFromFirebase($rootScope.uid).then((results) => {
        $scope.tasks = results;
        console.log("tasks", results);
        $location.url("/maintenance/seasonalview");
    }).catch((err) => {
        console.log("error in getTasks", err);
    });
    };
    getTasks();

    $scope.markTaskCompleted = (taskId) => {
        
    };
});