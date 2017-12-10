"use strict";

app.controller("NewTaskCtrl", function($http, $location, $rootScope, $scope, TaskService){

    $scope.addNewTaskToFirebase = () => {
        $scope.newTask.uid = $rootScope.uid;
        TaskService.postNewMaintenanceTask($scope.newTask).then((results) => {
            $scope.newTask = {};
            $scope.newTask.dateToBeCompleted = moment(results.dateToBeCompleted);
                $location.url("/maintenance/viewtasks");
        }).catch((error) => {
            console.log("error in addNewTaskToFirebase", error);
        });
    };
});