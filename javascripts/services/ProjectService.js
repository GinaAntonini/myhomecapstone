"use strict";

app.service("ProjectService", function($http, $q, FIREBASE_CONFIG){

    const getCurrentProjectsFromFirebase = (userUid) => {
		let projects = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/improvements.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbProjects = results.data;
        Object.keys(fbProjects).forEach((key) => {
          if(fbProjects[key].completed === false){
            fbProjects[key].id = key;
            projects.push(fbProjects[key]);
          }
        });
        resolve(projects);
      }).catch((err) => {
        reject(err);
      });
    });
  };

  const getCompletedProjectsFromFirebase = (userUid) => {
		let projects = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/improvements.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbProjects = results.data;
        Object.keys(fbProjects).forEach((key) => {
          if (fbProjects[key].completed){
            fbProjects[key].id = key;
            projects.push(fbProjects[key]);
          }
        });
        resolve(projects);
      }).catch((err) => {
        reject(err);
      });
    });
  };

  const getSeasonsFromFirebase = (season) => {
		let projects = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/improvements.json?orderBy="seasonToComplete"&equalTo="${season}"`).then((results) => {
        let fbProjects = results.data;
        Object.keys(fbProjects).forEach((key) => {
          if (fbProjects[key].seasonToComplete && fbProjects[key].completed === false){
            fbProjects[key].id = key;
            projects.push(fbProjects[key]);
          }
        });
        resolve(projects);
      }).catch((err) => {
        reject(err);
      });
    });
  };

	const postNewImprovementProject = (newProject) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/improvements.json`, JSON.stringify(newProject));
  };

  const editImprovementProject = (projectId, project) => {
    return $http.put(`${FIREBASE_CONFIG.databaseURL}/improvements/${projectId}.json`, JSON.stringify(project));
  };

  const markCompleted = (projectId, completed) => {
    return $http.patch(`${FIREBASE_CONFIG.databaseURL}/improvements/${projectId}.json`, JSON.stringify({completed}));
  };

  const getSingleImprovementProject = (projectId) => {
    return $http.get(`${FIREBASE_CONFIG.databaseURL}/improvements/${projectId}.json`);
  };

  const deleteImprovementProject = (projectId) => {
		return $http.delete(`${FIREBASE_CONFIG.databaseURL}/improvements/${projectId}.json`);
  };
    return {postNewImprovementProject, 
      getCurrentProjectsFromFirebase, 
      getCompletedProjectsFromFirebase, 
      editImprovementProject, 
      getSingleImprovementProject, 
      deleteImprovementProject,
      markCompleted,
      getSeasonsFromFirebase};
});