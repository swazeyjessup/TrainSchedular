$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyBaA24o_1PD-gynchvq-I-uHLTuBS-T6UE",
        authDomain: "trainschedule-a51b3.firebaseapp.com",
        databaseURL: "https://trainschedule-a51b3.firebaseio.com/",
        projectId: "trainschedule-a51b3",
        storageBucket: "trainschedule-a51b3.appspot.com",
        messagingSenderId: "144608996614"
    };
    firebase.initializeApp(config);

    // A variable to reference the database.
    var database = firebase.database();

    // Variables for the onClick event
    var name;
    var destination;
    var firstTrain;
    var frequency = 0;


});