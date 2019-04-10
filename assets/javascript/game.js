
$(document).ready(function() {
  //create variable starting random number between 19 and 120
  var random = Math.floor(Math.random() * 102) + 19

  // Display random number in html
  $('#numberToMatch').html(random);



  //create variables for random number between 1 and 12 for each crystal 
  var crystalOne = Math.floor(Math.random() * 12) + 1
  var crystalTwo = Math.floor(Math.random() * 12) + 1
  var crystalThree = Math.floor(Math.random() * 12) + 1
  var crystalFour = Math.floor(Math.random() * 12) + 1

  // Variables to keep track of wins, losses and total
  var wins = 0;
  var losses = 0;
  var currentTotal = 0;


  //display wins in html
  $('#wins').html(wins);
  //display losses in html
  $('#losses').html(losses);

  //create function to reset scores and crystal numbers
  function reset() {
    random = Math.floor(Math.random() * 102) + 19;
    console.log(random)
    $('#numberToMatch').html(random);
    crystalOne = Math.floor(Math.random() * 12) + 1;
    console.log(crystalOne)
    crystalTwo = Math.floor(Math.random() * 12) + 1;
    console.log(crystalTwo)
    crystalThree = Math.floor(Math.random() * 12) + 1;
    console.log(crystalThree)
    crystalFour = Math.floor(Math.random() * 12) + 1;
    console.log(crystalFour)
    currentTotal = 0;
    $('#totalScore').html(currentTotal);
  }

  //creat add wins as the player guesses correctly
  function winner() {
    wins++;
    $('#wins').html(wins);
    //call reset funtion
    reset();

  }
  //create add losses as the player overshoots
  function loser() {
    losses++;
    $('#losses').html(losses);
    //call reset funtion
    reset()
  }
  //create on click for red crystal
  $('.red').on('click', function() {
    //total score plus current value of red crystal
    currentTotal = currentTotal + crystalOne;
    console.log("new currentTotal= " + currentTotal);
    $('#totalScore').html(currentTotal);

    //make total score the same as random number to call on win funtion
    if (currentTotal == random) {
      winner();
    }

    ///make total score greater than random number to call on loss funtion
    else if (currentTotal > random) {
      loser();
    }

  });

  //repeat above steps for remaining three crystals
  $('.blue').on('click', function() {
    currentTotal = currentTotal + crystalTwo;
    console.log("new currentTotal= " + currentTotal);
    $('#totalScore').html(currentTotal);

    if (currentTotal == random) {
      winner();
    }

    else if (currentTotal > random) {
      loser();
    }
  });

  $('.yellow').on('click', function() {
    currentTotal = currentTotal + crystalThree;
    console.log("new currentTotal= " + currentTotal);
    $('#totalScore').html(currentTotal);

    if (currentTotal == random) {
      winner();
    }

    else if (currentTotal > random) {
      loser();
    }

  });

  $('.green').on('click', function() {
    currentTotal = currentTotal + crystalFour;
    console.log("new currentTotal= " + currentTotal);
    $('#totalScore').html(currentTotal);

    if (currentTotal == random) {
      winner();
    }

    else if (currentTotal > random) {
      loser();
    }
  });

}); 