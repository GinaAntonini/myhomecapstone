"use strict";

app.service("TaskService", function($http, $q, FIREBASE_CONFIG){

	const postNewMaintenanceTask = (newTask) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/maintenance.json`, JSON.stringify(newTask));
    };
    
    return {postNewMaintenanceTask};
});