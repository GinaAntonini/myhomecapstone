"use strict";

app.service("TaskService", function($http, $q, FIREBASE_CONFIG){

  const getCurrentTasksFromFirebase = (userUid) => {
		let tasks = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/maintenance.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbTasks = results.data;
        Object.keys(fbTasks).forEach((key) => {
          if(fbTasks[key].completed === false){
          fbTasks[key].id = key;
          tasks.push(fbTasks[key]);
          }
        });
        resolve(tasks);
      }).catch((err) => {
        reject(err);
      });
    });
  };

  const getCompletedTasksFromFirebase = (userUid) => {
		let tasks = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/maintenance.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbTasks = results.data;
        Object.keys(fbTasks).forEach((key) => {
          if (fbTasks[key].completed){
            fbTasks[key].id = key;
            tasks.push(fbTasks[key]);
          }
        });
        resolve(tasks);
      }).catch((err) => {
        reject(err);
      });
    });
  };

  const getSeasonsFromFirebase = (season) => {
		let tasks = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/maintenance.json?orderBy="seasonToComplete"&equalTo="${season}"`).then((results) => {
        let fbTasks = results.data;
        Object.keys(fbTasks).forEach((key) => {
          if (fbTasks[key].seasonToComplete && fbTasks[key].completed === false){
            fbTasks[key].id = key;
            tasks.push(fbTasks[key]);
          }
        });
        resolve(tasks);
      }).catch((err) => {
        reject(err);
      });
    });
  };
  
	const postNewMaintenanceTask = (newTask) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/maintenance.json`, JSON.stringify(newTask));
    };

  const editMaintenanceTask = (taskId, task) => {
    return $http.put(`${FIREBASE_CONFIG.databaseURL}/maintenance/${taskId}.json`, JSON.stringify(task));
  };

  const markCompleted = (taskId, completed) => {
    return $http.patch(`${FIREBASE_CONFIG.databaseURL}/maintenance/${taskId}.json`, JSON.stringify({completed}));
  };

  const getSingleMaintenanceTask = (taskId) => {
    return $http.get(`${FIREBASE_CONFIG.databaseURL}/maintenance/${taskId}.json`);
  };

  const deleteMaintenanceTask = (taskId) => {
		return $http.delete(`${FIREBASE_CONFIG.databaseURL}/maintenance/${taskId}.json`);
  };
    
    return {getCurrentTasksFromFirebase, getCompletedTasksFromFirebase, postNewMaintenanceTask, editMaintenanceTask, deleteMaintenanceTask, getSingleMaintenanceTask, getSeasonsFromFirebase, markCompleted};
});