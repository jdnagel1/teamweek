$(document).ready(function() {
    
    
    
    $("form#workout-form").submit(function(event){
        var commitment = $("#time-commitment").val();
        debugger;
        $("form#workout-form").hide();
        if (commitment == 5) {
            $("#fivedayresults").show();
        } else if (commitment == 4) {
            $("#fourdayresults").show();
        } else {
            $("#threedayresults").show();
        };
        event.preventDefault();
    });
});