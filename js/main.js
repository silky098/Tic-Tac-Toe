var wins = [];
var $playerX = $('<img src="images/x.jpg" width="100px" height="100px" class="peice" id="peiceX" />');
var $playerO = $('<img src="images/o.jpg" width="100px" height="100px" class="peice" id="peiceO" />');

$(document).ready(function(value){

//allows alternate 'o's and 'x's to be placed in the squares
var turns = function(){
  if (clicks % 2 == 0) {
    $(this).prepend('<img src="images/x.jpg" width="100px" height="100px" class="peice" id="peiceX" />');
  } else {
    $(this).prepend('<img src="images/o.jpg" width="100px" height="100px" class="peice" id="peiceO" />');
  };
  clicks++;
  gameBoard();
};

//allows one click in each square
var clicks = 0;
$('td').one('click', turns);

var gameBoard = function() {

  //declare variables for each grid position

  var $a1 = $('#a1 > img').attr('id');
  var $a2 = $('#a2 > img').attr('id');
  var $a3 = $('#a3 > img').attr('id');
  var $b1 = $('#b1 > img').attr('id');
  var $b2 = $('#b2 > img').attr('id');
  var $b3 = $('#b3 > img').attr('id');
  var $c1 = $('#c1 > img').attr('id');
  var $c2 = $('#c2 > img').attr('id');
  var $c3 = $('#c3 > img').attr('id');

  var xWin = ['peiceX','peiceX','peiceX'];
  var oWin = ['peiceO','peiceO','peiceO'];

  var wins = [
    [$a1, $a2, $a3],
    [$b1, $b2, $b3],
    [$c1, $c2, $c3],
    [$a1, $b1, $c1],
    [$a2, $b2, $c2],
    [$a3, $b3, $c3],
    [$a1, $b2, $c3],
    [$a3, $b2, $c1]
];

  $.each(wins, function( index, value ) {
    var match = false;
    if( value.toString() === xWin.toString() ){
    alert('x wins!', index);
     //$('h1', index).css("visibility","visible"); //new code FIXME
      return;
    } else if ( value.toString() === oWin.toString() ){
      alert('o wins!', index);
      return;
    } else if ((clicks > 8)&&(( value.toString() !== xWin.toString() )&&( value.toString() !== oWin.toString() ))){
      alert("cat's game");
    }
    //console.log(index, value);
  });
};

//reset button
$('#reset').click(function() {
  $('.peice').remove();
  clicks = 0;
  $('td').one('click', turns);
  });
//close Doc ready function
});
