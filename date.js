//jshint esversion:6

module.exports.getDate = function (){
//just exports.getDate will do the same thing.
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();

    var day = today.toLocaleDateString("en-US", options);
    return day;
}

//two ways of writing(exporting in this case) function in javascript

module.exports.getDay = getDay;

function getDay(){

    var options = { weekday: 'long'};
    var today  = new Date();

    var day = today.toLocaleDateString("en-US", options);
    return day;
}
