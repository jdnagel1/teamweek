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
        $("input:radio[id=weight1]:checked").each(function() {
            $(".muscle-gain").hide();
        });
        $("input:radio[id=muscle1]:checked").each(function() {
            $(".weight-loss").hide();
        });
        $("input:radio[id=BMI1]:checked").each(function() {
            $(".cardio").hide();
            $(".flex").hide();
        });
        $("input:radio[id=cardio1]:checked").each(function() {
            $(".BMI").hide();
            $(".flex").hide();
        });
        $("input:radio[id=flex1]:checked").each(function() {
            $(".cardio").hide();
            $(".BMI").hide();
        });
    });
});
