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
        }).catch((err) => {
            console.log("error in saveTaskMaterialToFirebase", err);
        });
    };

    $scope.saveProjectMaterialToFirebase = (material) => {
        material.uid = $rootScope.uid;
        let newProjectMaterial = MaterialsService.createProjectMaterialObject(material);
        MaterialsService.addNewProjectMaterial(newProjectMaterial).then(() => {
        }).catch((err) => {
            console.log("error in saveMaterialToFirebase", err);
        });
    };

    const getMaterialsForTasks = () => {
		MaterialsService.getSelectedTaskMaterials($rootScope.uid).then((results) => {
			$scope.taskmaterials = results;
		}).catch((err) => {
			console.log("error in getMaterialsForTasks", err);
		});
	};
    getMaterialsForTasks();
    
    const getMaterialsForProjects = () => {
		MaterialsService.getSelectedProjectMaterials($rootScope.uid).then((results) => {
			$scope.projectmaterials = results;
		}).catch((err) => {
			console.log("error in getMaterialsForProjects", err);
		});
	};
	getMaterialsForProjects();
});