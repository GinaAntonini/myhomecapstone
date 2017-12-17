"use strict";

app.controller("SearchProductsCtrl", function($location, $rootScope, $scope, WalmartService, MaterialsService){
    $scope.items = [];

    $scope.onEnterSearch = (event) => {
        if(event.keyCode === 13){
            WalmartService.searchProducts(event.target.value).then((results) => {
                $scope.items = results.data.items;
                console.log(results.data.items);
            }).catch((err) => {
                console.log("error in searchProducts", err);
            });
        }
    };

    $scope.saveTaskMaterialToFirebase = (material) => {
        material.uid = $rootScope.uid;
        let newTaskMaterial = MaterialsService.createTaskMaterialObject(material);
        MaterialsService.addNewTaskMaterial(newTaskMaterial).then(() => {
            console.log(newTaskMaterial);
            $location.path("/maintenance/materials");
        }).catch((err) => {
            console.log("error in saveTaskMaterialToFirebase", err);
        });
    };

    $scope.saveProjectMaterialToFirebase = (material) => {
        material.uid = $rootScope.uid;
        let newProjectMaterial = MaterialsService.createProjectMaterialObject(material);
        MaterialsService.addNewProjectMaterial(newProjectMaterial).then(() => {
            console.log(newProjectMaterial);
            $location.path("/improvements/materials");
        }).catch((err) => {
            console.log("error in saveMaterialToFirebase", err);
        });
    };

    $scope.goToTaskList = () => {
        $location.path("/maintenance/materials");
    };

    $scope.goToProjectList = () => {
        $location.path("/improvements/materials");
    };
});