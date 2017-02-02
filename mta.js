/*global $*/

$.getJSON('https://ajar-target.gomix.me/stops', function(response) {
   console.log(response);
   var keys = Object.keys(response);
   for (i = 0; i < keys.length; i++) {
       $("body").append (
           response[keys[i]].stop_name 
           );
   }
});
    