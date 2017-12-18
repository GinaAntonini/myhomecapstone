"use strict";

app.controller("EditTaskCtrl", function($location, $rootScope, $routeParams, $scope, MaterialsService,TaskService, WalmartService){
    
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

    $scope.onEnterSearch = (event) => {
        if(event.keyCode === 13){
            WalmartService.searchProducts(event.target.value).then((results) => {
                $scope.items = results.data.items;
            }).catch((err) => {
                console.log("error in searchProducts", err);
            });
        }
    };

    $scope.saveTaskMaterialToFirebase = (material) => {
        material.uid = $rootScope.uid;
        let newTaskMaterial = MaterialsService.createTaskMaterialObject(material);
        MaterialsService.addNewTaskMaterial(newTaskMaterial).then(() => {
        }).catch((err) => {
            console.log("error in saveTaskMaterialToFirebase", err);
        });
    };

});