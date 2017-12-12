"use strict";

app.controller("MaintSeasonalCtrl", function($http, $location, $rootScope, $scope, TaskService){
    
    const getSeasonToComplete = (season) => {
        TaskService.getSeasonsFromFirebase(season).then((results) => {
        $scope.tasks = results;
    }).catch((err) => {
        console.log("error in getSeasonToComplete", err);
    });
    }; 
    getSeasonToComplete("Spring");

    $scope.getTasksInSeason = (event) => {
        getSeasonToComplete(event.target.value);
    };

    $scope.markTaskCompleted = (task) => {
		task.completed = !task.completed;
		TaskService.markCompleted(task.id, task.completed).then(() => {
           getSeasonToComplete(task.seasonToComplete);
        }).catch((err) => {
            console.log("error in markTaskCompleted", err);
        });
    };
    
});