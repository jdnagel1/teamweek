$(document).ready(function() {
    
    
    var commitment = $("time-commitment").val();

    $("#workout-form").submit(function(event){
        event.preventdefault;
        if (commmitment === 5) {
            $(".5dayresult").show();
        } if else (commitment === 4) {
            $(".4dayresult").show();
        } else (commitment === 3) {
            $(".3dayresult").show
        };
    });
});