"use strict";

app.service("ProjectService", function($http, $q, FIREBASE_CONFIG){
	const postNewImprovementProject = (newProject) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/improvements.json`, JSON.stringify(newProject));
    };
    return {postNewImprovementProject};
});