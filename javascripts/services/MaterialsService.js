"use strict";

app.service("MaterialsService", function($http, $q, FIREBASE_CONFIG){
    const getSelectedTaskMaterials = (userUid) => {
		let taskmaterials = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/taskmaterials.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
				let fbTaskMaterials = results.data;
				Object.keys(fbTaskMaterials).forEach((key) =>{
					fbTaskMaterials[key].id = key;
						taskmaterials.push(fbTaskMaterials[key]);
                    resolve(taskmaterials);
				});
			}).catch((err) => {
				reject(err);
			});
		});
    };

    const getSelectedProjectMaterials = (userUid) => {
		let projectmaterials = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/projectmaterials.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
				let fbProjectMaterials = results.data;
				Object.keys(fbProjectMaterials).forEach((key) =>{
					fbProjectMaterials[key].id = key;
                        projectmaterials.push(fbProjectMaterials[key]);
					resolve(projectmaterials);
				});
			}).catch((err) => {
				reject(err);
			});
		});
    };

    const addNewTaskMaterial = (newTaskMaterial) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/taskmaterials.json`, JSON.stringify(newTaskMaterial));
    };

    const addNewProjectMaterial = (newProjectMaterial) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/projectmaterials.json`, JSON.stringify(newProjectMaterial));
    };

    const createTaskMaterialObject = (item) => {
        return {
            "image": item.mediumImage,
            "name": item.name,
            "salePrice": item.salePrice,
            "uid": item.uid,
            "itemId": item.itemId            
        };
    };
    
    const createProjectMaterialObject = (item) => {
        return {
            "image": item.mediumImage,
            "name": item.name,
            "salePrice": item.salePrice,
            "uid": item.uid,
            "itemId": item.itemId            
        };
    };

    return{
        getSelectedTaskMaterials,
        createTaskMaterialObject,
        addNewTaskMaterial,
        createProjectMaterialObject,
        addNewProjectMaterial,
        getSelectedProjectMaterials
    };

});