   
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyBCHbDFIlYMYrr1g9vt2zwrXi8aV2llYBg",
        authDomain: "fir-project-1-d7e06.firebaseapp.com",
        databaseURL: "https://fir-project-1-d7e06.firebaseio.com",
        projectId: "fir-project-1-d7e06",
        storageBucket: "fir-project-1-d7e06.appspot.com",
        messagingSenderId: "222539529434"
      };
      firebase.initializeApp(config);
    
    // Get a reference to the database service
    var database = firebase.database();
    
    $("#click-button").on("click", function(event){
        event.preventDefault();

        // Clear the HTML from the form
        $("#name-input").html("");
        $("#destination-input").html("");
        $("#time-input").html("");
        $("#frequency-input").html("");

        // Grab the user input
        var train_name = $("#name-input").val().trim();
        var destination = $("#destination-input").val().trim();
        var time = $("#time-input").val().trim();
        var frequency_name = $("#frequency-input").val().trim();

        // Change what is saved in firebase
         database.ref().set({
            train_name: train_name,
            destination: destination,
            time: time,
            frequency_name: frequency_name,
      });
    });

    // Firebase is always watching for changes to the data.
    // When changes occurs it will print them to console and html
    database.ref().on("value", function(snapshot) {

      // Print the initial data to the console.
      console.log(snapshot.val());

      // Log the value of the various properties
      console.log(snapshot.val().train_name);
      console.log(snapshot.val().destination);
      console.log(snapshot.val().time);
      console.log(snapshot.val().frequency_name);

      // Change the HTML
      $("#displayed-data").text(snapshot.val().train_name + " | " + snapshot.val().destination + " | " + snapshot.val().time)+ " | " + snapshot.val().frequency_name;
      // If any errors are experienced, log them to console.
    },  
    function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });