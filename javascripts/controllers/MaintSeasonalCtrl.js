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

    const getSeasonToComplete = () => {
        TaskService.getSeasonsFromFirebase($rootScope.uid).then((results) => {
        $scope.seasonToComplete = results;
    }).catch((err) => {
        console.log("error in getSeasonToComplete", err);
    });

    $scope.getSeason = (event) => {
        if(event.target.value === "Spring"){
            getSeasonToComplete();
        }
        // } else (event.target.value === "Summer"){
        //     getTasks();
        // } else (event.target.value === "Fall"){
        //     getTasks();
        // } else (event.target.value === "Winter"){
        //     getTasks();
        console.log("event", event.target.value);
        };
    };

     // $scope.markTaskCompleted = (taskId) => {
        
    // };
});