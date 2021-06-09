$(document).ready(function() {


    var count = 0;

    $("#filter").click(function() {
        $("#container-filter").toggle();
        $("#filter").css("border-radius","50px");
        count += 1;
        
        if ((count%2)==0) {
            $("#filter").css("border-radius","5px 5px 0 0");
        }
    });

    

});