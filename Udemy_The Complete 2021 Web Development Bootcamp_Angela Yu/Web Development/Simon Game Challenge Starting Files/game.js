var buttonColors = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var lost = false;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = buttonColors[randomNumber];
  gamePattern.push(randomColor);

  $("#" + randomColor).fadeOut(100).fadeIn(100);
  playSound(randomColor);

  $("h1").text("Level " + level);
  level++;
}

function playSound (name) {
  var colorSound = new Audio("sounds/" + name + ".mp3");
  colorSound.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
  $("#" + currentColor).removeClass("pressed");
}, 100);
}

function gameCheck() {
  for (i = 0; i < userClickedPattern.length; i++) {
    if (userClickedPattern[i] != gamePattern[i]) {
      playSound("wrong");
      $("h1").text("Game Over, Press Any Key To Restart");
      $("body").addClass("game-over");
      setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
    break;
    }
  }
}

function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  lost = true;
  $(document).one("keydown", nextSequence);
}

$(document).one("keydown", function() {
  nextSequence();
});

$("[type='button']").click(function handler(event) {
  console.log(event);
  userChosenColor = $(event["target"]).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  gameCheck();

  if (lost == false &&  userClickedPattern.length == gamePattern.length) {
    setTimeout(nextSequence, 1000);
    userClickedPattern = [];
  }
  lost = false;
});
