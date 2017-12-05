"use strict";

app.run(function($location, $rootScope, FIREBASE_CONFIG){
    firebase.initializeApp(FIREBASE_CONFIG);
});