"use strict";

app.controller("MaintenanceMaterialsCtrl", function($location, $rootScope, $scope, TaskService){
    const getCurrentTasks = () => {
        TaskService.getCurrentTasksFromFirebase($rootScope.uid).then((results) => {
        $scope.tasks = results;
        console.log(results);
    }).catch((err) => {
    console.log("error in getCurrentTasks", err);
   });
};
getCurrentTasks();
});