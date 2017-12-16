"use strict";

app.service("MaterialsService", function($http, $q, FIREBASE_CONFIG){
    const getSelectedMaterials = (userUid) => {
		let materials = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/materials.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
				let fbMaterials = results.data;
				Object.keys(fbMaterials).forEach((key) =>{
					fbMaterials[key].id = key;  // fbMovies["movies0"].id = "movies0"
						materials.push(fbMaterials[key]);
					resolve(materials);
				});
			}).catch((err) => {
				reject(err);
			});
		});
    };
    
    const createItemObject = (item) => {
        return {
            "image": item.mediumImage,
            "name": item.name,
            "salePrice": item.salePrice,
            "uid": item.uid
        };
    };
    
    return{
        getSelectedMaterials,
        createItemObject
    };

});