"use strict";

app.controller("ViewTasksCtrl", function($location, $rootScope, $scope, TaskService){
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

});