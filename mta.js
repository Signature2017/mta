/*global $*/
$(document).ready(function() {
    
$.getJSON('https://ajar-target.gomix.me/stops', function(response){
    
    $("body").append(response[401].stop_name);
    //console.log(Object.keys(response))
       var trainChoice = "4";
        var stopNumber = "02"
    $("body").append(response[trainChoice=stopNumber].stop_name);
    
});

});
