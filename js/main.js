$(document).ready(function(value){

//declare variables for each grid position in an array
//var arr = [id: 'a1',id:'b1', id: 'c1'];

var a1 = $('#a1');
var a2 = $('#a2');
var a3 = $('#a3');
var b1 = $('#b1');
var b2 = $('#b2');
var b3 = $('#b3');
var c1 = $('#c1');
var c2 = $('#c2');
var c3 = $('#c3');

var clicks = 0;
$( '#a1' ).click(function() {
  if (clicks % 2 == 0){
  $(this).prepend('<img src="images/x.jpg" />');
} else {
  $(this).prepend('<img src="images/o.jpg" />');
}
++clicks;
});

var clicks = 0;
$( '#a2' ).click(function() {
  if (clicks % 2 == 0){
  $(this).prepend('<img src="images/x.jpg" />');
} else {
  $(this).prepend('<img src="images/o.jpg" />');
}
++clicks;
});

var clicks = 0;
$( '#a3' ).click(function() {
  if (clicks % 2 == 0){
  $(this).prepend('<img src="images/x.jpg" />');
} else {
  $(this).prepend('<img src="images/o.jpg" />');
}
++clicks;
});

var clicks = 0;
$( '#b1' ).click(function() {
  if (clicks % 2 == 0){
  $(this).prepend('<img src="images/x.jpg" />');
} else {
  $(this).prepend('<img src="images/o.jpg" />');
}
++clicks;
});

var clicks = 0;
$( '#b2' ).click(function() {
  if (clicks % 2 == 0){
  $(this).prepend('<img src="images/x.jpg" />');
} else {
  $(this).prepend('<img src="images/o.jpg" />');
}
++clicks;
});
var clicks = 0;
$( '#b3' ).click(function() {
  if (clicks % 2 == 0){
  $(this).prepend('<img src="images/x.jpg" />');
} else {
  $(this).prepend('<img src="images/o.jpg" />');
}
++clicks;
});
var clicks = 0;
$( '#c1' ).click(function() {
  if (clicks % 2 == 0){
  $(this).prepend('<img src="images/x.jpg" />');
} else {
  $(this).prepend('<img src="images/o.jpg" />');
}
++clicks;
});
var clicks = 0;
$( '#c2' ).click(function() {
  if (clicks % 2 == 0){
  $(this).prepend('<img src="images/x.jpg" />');
} else {
  $(this).prepend('<img src="images/o.jpg" />');
}
++clicks;
});
var clicks = 0;
$( '#c3' ).click(function() {
  if (clicks % 2 == 0){
  $(this).prepend('<img src="images/x.jpg" />');
} else {
  $(this).prepend('<img src="images/o.jpg" />');
}
++clicks;
});
//close Doc ready function
});
