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
        $("input:radio[name=primary-goal-weightLoss]:checked").each(function() {
            $(".muscle-gain").hide();
        });
        $("input:radio[name=primary-goal-muscleGain]:checked").each(function() {
            $(".weight-loss").hide();
        });
        $("input:radio[name=secondary-goal-BMI]:checked").each(function() {
            $(".cardio").hide();
            $(".flex").hide();
        });
        $("input:radio[name=secondary-goal-cardio]:checked").each(function() {
            $(".BMI").hide();
            $(".flex").hide();
        });
        $("input:radio[name=secondary-goal-flex]:checked").each(function() {
            $(".cardio").hide();
            $(".BMI").hide();
        });
    });
});
