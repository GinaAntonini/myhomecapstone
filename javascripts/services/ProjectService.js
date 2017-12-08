"use strict";

app.service("ProjectService", function($http, $q, FIREBASE_CONFIG){

    const getCurrentProjectsFromFirebase = (userUid) => {
		let projects = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/improvements.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbProjects = results.data;
        Object.keys(fbProjects).forEach((key) => {
          fbProjects[key].id = key;
            projects.push(fbProjects[key]);
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

	const postNewImprovementProject = (newProject) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/improvements.json`, JSON.stringify(newProject));
  };

    return {postNewImprovementProject, getCurrentProjectsFromFirebase, getCompletedProjectsFromFirebase};
});