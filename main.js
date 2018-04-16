
var cards = [];
cards[0] = 'img/bridge.jpg';
cards[1] = 'img/house.jpg';
cards[2] = 'img/ocean_water.jpg';
cards[3] = 'img/sunset.jpg';
cards[4] = 'img/trees.jpg';
cards[5] = 'img/waterfall.jpg';
cards[6] = 'img/waterfall1.jpg';
cards[7] = 'img/maxresdefault.jpg';
cards[8] = 'img/bridge.jpg';
cards[9] = 'img/house.jpg';
cards[10] = 'img/ocean_water.jpg';
cards[11] = 'img/sunset.jpg';
cards[12] = 'img/trees.jpg';
cards[13] = 'img/waterfall.jpg';
cards[14] = 'img/waterfall1.jpg';
cards[15] = 'img/maxresdefault.jpg';
var cards_flipped = [],
  first, second,
  match = 0,
  counter = 0;




function init() {
  newDeck();
}

function shuffleCards(array) {
  var i = array.length, j, temp;

  while (i > 0) {
    j = Math.floor(Math.random() * i);
    i--;
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;

}



function newDeck() {
  cards_flipped = [];
  document.getElementById('win').innerHTML = '';
  var result = '';
  var s = shuffleCards(cards);
  for (var i = 0; i < s.length; i++) {
    result += '<div id="card_' + i + '" class="items" onclick="flipcard(' + i + ', \'card_' + i + '\' );"><div class="front"></div><div class="back"><img src="' + s[i] + '"></div></div>';
  }
  document.getElementById('deck').innerHTML = result;
}


function flipcard(card_index, card_id) {
  if (cards_flipped.length == 0) {
    cards_flipped.push(card_id);
    first = card_index;
    document.getElementById(card_id).classList.toggle('flip');
    counter++;
  }
  else if (cards_flipped.length == 1) {
    cards_flipped.push(card_id);
    second = card_index;
    counter++;
    document.getElementById(card_id).classList.toggle('flip');

    if (cards[first] == cards[second]) {
      match += 2;
      function removeCards(){
        var pDiv1 = document.getElementById(cards_flipped[0]);
      var cDiv = pDiv1.children;
      for (var i = 0; i < cDiv.length; i++) {
        if (cDiv[i].tagName == "DIV") {  
          cDiv[i].style.display = 'none'; 
        }
      }

      var pDiv2 = document.getElementById(cards_flipped[1]);
      var cDiv2 = pDiv2.children;
      for (var i = 0; i < cDiv2.length; i++) {
        if (cDiv2[i].tagName == "DIV") {   
          cDiv2[i].style.display = 'none'; 
        }
         
      }
     cards_flipped = [];
      }
      setTimeout(removeCards, 500);

      if (match == cards.length) {
        var msg = 'You have completed the game successfully in ' + counter + ' moves. Click start to play again.';
        document.getElementById('win').innerHTML = msg;
      }
    }
    else {
      function flipBack() {
        document.getElementById(cards_flipped[0]).classList.toggle('flip');
        document.getElementById(cards_flipped[1]).classList.toggle('flip');
        cards_flipped = [];
      }
      setTimeout(flipBack, 700);
    }
  }

}
function resMenu() {
  var id = document.getElementById('menu');
  if (id.className === 'menu') {
    id.className += ' responsive';
  } else {
    id.className = 'menu';
  }
}
init();

