"use strict";

app.controller("NewTaskCtrl", function($http, $location, $rootScope, $scope, $window, TaskService, WalmartService, MaterialsService){

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

    $scope.onEnterSearch = (event) => {
        if(event.keyCode === 13){
            WalmartService.searchProductsInNew(event.target.value).then((results) => {
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

    $scope.success = 'Added to Materials List!';
      $scope.doSuccess = function(success){
        $window.alert(success);
      };
});