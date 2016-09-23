$(document).ready(function(value){
// declare an array for win
var wins = [];
// declare the image variables for X and O
var $playerX = $('<img src="images/x.jpg" width="100px" height="100px" class="peice" id="peiceX" />');
var $playerO = $('<img src="images/o.jpg" width="100px" height="100px" class="peice" id="peiceO" />');
// function to take alternate turns between X and O. Also checks if an image is there before allowing an image to occupy a space using find('img').length>0
var turns = function(){
  if( $(this).find('img').length > 0 ){
    return;
  }
  if (clicks % 2 == 0) {
    $(this).prepend($playerX.clone()) ;
  } else {
    $(this).prepend($playerO.clone());
  };
  clicks++;
  gameBoard();
};

//allows one click in each square
var clicks = 0;
$('td').on('click', turns);
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
// declare variables for X win array and O win array
  var xWin = ['peiceX','peiceX','peiceX'];
  var oWin = ['peiceO','peiceO','peiceO'];
// Declare an array of win combination arrays
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
// converts the win arrays to string so they can be compared. If matched for X win, then div containing X wins, which was previously hidden, becomes visible. Likewise for O win, and if there have been over 8 clicks and X did not win, and O did not win, then a div containing 'Cat's Game' becomes visible.
  $.each(wins, function( index, value ) {
    var match = false;
    if( value.toString() === xWin.toString() ){
     $('div#winnerX').css('visibility','visible');
      return;
    } else if ( value.toString() === oWin.toString() ){
      $('div#winnerO').css('visibility','visible');
      return;
    } else if ((clicks > 8)&&(( value.toString() !== xWin.toString() )&&( value.toString() !== oWin.toString() ))){
      $('div#winnerZ').css('visibility','visible');
    }
  });
};

//reset button. Removes the X and O tiles, and hides the banners for wins and cat's game. Also resets the clicks to 0 ready for the next game.
$('#reset').click(function() {
  console.log('before',   $('.peice') );
  $('.peice').remove();
  console.log('after',   $('.peice') );

  $('div#winnerX').css('visibility','hidden');
  $('div#winnerO').css('visibility','hidden');
  $('div#winnerZ').css('visibility','hidden');
  clicks = 0;
  });
//close Doc ready function
});
