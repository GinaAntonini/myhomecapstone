"use strict";

app.controller("EditTaskCtrl", function($location, $rootScope, $routeParams, $scope, TaskService){
    const getTaskToEdit = () => {
        TaskService.getSingleMaintenanceTask($routeParams.id).then((results) =>{
            $scope.task = results.data;
            }).catch((err) =>{
            console.log("err in getTaskToEdit", err);
        });
    };
    getTaskToEdit();

    $scope.editTaskInFirebase = (task) => {
		TaskService.editMaintenanceTask($routeParams.id, task).then(() => {
            $location.path("/maintenance/viewtasks");
        }).catch((err) => {
            console.log("error in editTaskInFirebase", err);
        });
    };
});