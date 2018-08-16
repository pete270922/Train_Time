    
    
    $("#add-to-table").on("click". function(event){
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

        // Clear absolutely everything stored in localStorage using localStorage.clear()
        localStorage.clear();
    
        // Store the username into localStorage using "localStorage.setItem"
        localStorage.setItem("name-input", train_name);
        localStorage.setItem("destination-input", destination_name);
        localStorage.setItem("time-input", time);
        localStorage.setItem("frequency-input", frequency);
    });

        $("#train_name").text(localStorage.getItem("name-input"));
        $("#destination").text(localStorage.getItem("destination-input"));
        $("#time").text(localStorage.getItem("time-input"));
        $("#frequency_name").text(localStorage.getItem("frequency-input"));