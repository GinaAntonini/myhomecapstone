"use strict";

app.controller("NewProjectCtrl", function($location, $rootScope, $scope, ProjectService, WalmartService, MaterialsService){
    
    $scope.addNewProjectToFirebase = () => {
        $scope.newProject.uid = $rootScope.uid;
        ProjectService.postNewImprovementProject($scope.newProject).then((results) => {
            $scope.newProject = {};
            $scope.newProject.dateToBeCompleted = moment(results.data.dateToBeCompleted).format("MM-DD-YYYY");
                $location.url("/improvements/viewprojects");
        }).catch((error) => {
            console.log("error in addNewProjectToFirebase", error);
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

    $scope.saveProjectMaterialToFirebase = (material) => {
        material.uid = $rootScope.uid;
        let newProjectMaterial = MaterialsService.createProjectMaterialObject(material);
        MaterialsService.addNewProjectMaterial(newProjectMaterial).then(() => {
        }).catch((err) => {
            console.log("error in saveProjectMaterialToFirebase", err);
        });
    };
});