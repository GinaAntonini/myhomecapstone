"use strict";

app.controller("ViewTasksCtrl", function($location, $rootScope, $scope, TaskService, MaterialsService){
	
    const getTasks = () => {
    		TaskService.getCurrentTasksFromFirebase($rootScope.uid).then((results) => {
			$scope.tasks = results;
    	}).catch((err) => {
    	console.log("error in getTasks", err);
   	});
   };
   getTasks();

    $scope.editTask = (taskId) => {
		$location.path(`/maintenance/edit/${taskId}`);
	};

	$scope.deleteTaskFromFirebase = (taskId) => {
		TaskService.deleteMaintenanceTask(taskId).then((result) =>{
			getTasks();
		}).catch((err) =>{
		console.log("error in deleteTaskFromFirebase", err);
    	});
	};

	$scope.viewTaskDetail = (taskId) => {
		$location.path(`/maintenance/detail/${taskId}`);
	};

	const getMaterialsForTasks = () => {
		MaterialsService.getSelectedTaskMaterials($rootScope.uid).then((results) => {
			$scope.taskmaterials = results;
		}).catch((err) => {
			console.log("error in getMaterialsForTasks", err);
		});
	};
	getMaterialsForTasks();

	const getSeasonToComplete = (season) => {
        TaskService.getSeasonsFromFirebase(season).then((results) => {
        	$scope.tasks = results;
    	}).catch((err) => {
        	console.log("error in getSeasonToComplete", err);
    	});
    }; 
    getSeasonToComplete("Spring");

	$scope.markTaskCompleted = (task) => {
		task.completed = !task.completed;
		TaskService.markCompleted(task.id, task.completed).then(() => {
           getSeasonToComplete(task.seasonToComplete);
        }).catch((err) => {
            console.log("error in markTaskCompleted", err);
        });
	};

});