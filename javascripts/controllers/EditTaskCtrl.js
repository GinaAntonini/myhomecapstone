"use strict";

app.controller("EditTaskCtrl", function($location, $rootScope, $routeParams, $scope, TaskService){
    const getTaskToEdit = () => {
        TaskService.getSingleMaintenanceTask($routeParams.id).then((results) =>{
            $scope.task = results.data;
            $scope.task.dateToBeCompleted = moment(results.data.dateToBeCompleted);
            }).catch((err) =>{
            console.log("err in getTaskToEdit", err);
        });
    };
    getTaskToEdit();

    $scope.editTaskInFirebase = (task) => {
		TaskService.editMaintenanceTask($routeParams.id, task).then(() => {
            getTasks();
            $location.path("/maintenance/viewtasks");
        }).catch((err) => {
            console.log("error in editTaskInFirebase", err);
        });
    };

    const getTasks = () => {
        TaskService.getCurrentTasksFromFirebase($rootScope.uid).then((results) => {
        $scope.tasks = results;
        }).catch((err) => {
            console.log("error in getTasks", err);
        });
    };

});