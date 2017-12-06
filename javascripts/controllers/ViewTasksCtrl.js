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

});