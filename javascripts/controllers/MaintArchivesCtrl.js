"use strict";

app.controller("MaintArchivesCtrl", function($location, $rootScope, $scope, TaskService){
        
    const getCompletedTasks = () => {
    	TaskService.getCompletedTasksFromFirebase($rootScope.uid).then((results) => {
            $scope.completed = results;
            $location.path('/maintenance/archives');
    	}).catch((err) => {
    	console.log("error in getCompletedTasks", err);
   	});
   };
   getCompletedTasks();

});
