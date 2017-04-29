

$("#title1").text("hue").width(1);
$("#title2").text("saturation").width(1);
$("#title3").text("value").width(1);

$( "#sta" ).slider({
max: 255
});

$( "#sta" ).slider({
min: 0
});
$( "#sta" ).slider({
range: true
});
$( "#value" ).slider({
max: 255
});

$( "#value" ).slider({
min: 0
});
$( "#value" ).slider({
range: true
});

var values = new Array();

$( "#hue" ).slider({
max: 180
});

$( "#hue" ).slider({
min: 0
});
$( "#hue" ).slider({
range: true
});
values[0] = $( "#hue" ).slider( "option", "values" );
console.log(values[0]);
 values[1] = $( "#sta" ).slider( "option", "values" );
 
console.log(values[1]);
values[2] = $( "#value" ).slider( "option", "values" );
 
console.log(values[2]);
