
/* javascript */
var patternSelected = false;
let dragZ = 10;
let goalsSelected = [false, false, false, false, false, false, false, false, false, false];
let deceptiveGoals = [3, 4, 5, 7, 8, 10];

// Problems: Having trouble getting the correct results to show up depending on what patterns the user selected. I tried using a for loop, but the counter keeps increasing to 11.
// The results also keep showing infromation of the pattern to the right of the one selected.
// Unable to drag boxes after reverting them once.

$(".goal-item").draggable({
  start: function(event, ui){
    $(this).css({
      "z-index": ++dragZ,
    });
  },

  revert: function(dropElem){
    let item = $(this).data("item");
    let className = "goal-" + item;
    console.log(item, className);

    if (dropElem && dropElem.hasClass("goal-area")){
      patternSelected = true;
      goalsSelected[item] = true;
      console.log("patternSelected" , patternSelected);
      console.log(goalsSelected[item]);
      for (var i = 0; i < deceptiveGoals.length; i++){
        if (item === deceptiveGoals[i]){
          $(this).addClass("goal-item-true");
        }
      }
      return false;
    } else {
      goalsSelected[item]= false;
      checkMainGoal();
      $(this).removeClass("goal-item-true").css({
        position: "static"
      });
      setTimeout(function(){
        $("." + className).css({
          position: "relative",
          top: 0,
          left: 0
        });
      }, 100);
      return false;
    }
  }
});

function checkMainGoal(){
  let selected = false;
  for(var i = 0; i < goalsSelected.length; i++) {
    if (goalsSelected[i] === true){
      selected = true;

      break;
    }
  }
  patternSelected = selected;
  console.log("Goal selected", goalsSelected);
  console.log("patternSelected", patternSelected);
}

/*$(".goal-2").draggable({
  drag: function(){
    $(".goal-2").css({
      "z-index": ++dragZ
    });
  },

  start: function(event, ui){
    if (!goalSelected){
      startPos = ui.helper.position();
    }
  },

  revert: function(dropElem){
    if (dropElem && dropElem.hasClass("goal-area")){
      goalSelected = true;
      goal2Selected = true;
      console.log(goalSelected);
      console.log(goal2Selected);
      $(".goal-2").css({
        position: "absolute"
      });
      return false;
    } else {
      if (!goal1Selected && !goal3Selected && !goal4Selected && !goal5Selected && !goal6Selected && !goal7Selected && !goal8Selected && !goal9Selected && !goal10Selected) {
        goalSelected = false;
      }
      goal2Selected = false;
      $(".goal-2").css({
        top: startPos.top,
        left: startPos.left,
        position: "static"
      });
      return false;
    }
  }
});*/


$(".goal-area").droppable({});

firstPage();

function firstPage(){
  $(".start").show();
  $(".intro").hide();
  $(".main").hide();
  $(".results").hide();
}

function secondPage(){
  $(".start").hide();
  $(".intro").show();
  $(".main").hide();
  $(".results").hide();
}

function thirdPage(){
  $(".start").hide();
  $(".intro").hide();
  $(".main").show();
  $(".results").hide();
}

function fourthPage(){
  if (patternSelected) {
    $(".start").hide();
    $(".intro").hide();
    $(".main").hide();
    $(".results").show();

    for(var i = 0; i < goalsSelected.length; i++) {
      let className = "results-" + i;
      console.log(className);

      if (!goalsSelected[i]) {
        $("." + className).hide();
      }
    }
  }
}

// Add new functions

$(document).on("click", "#start-btn", secondPage);
$(document).on("click", "#continue-btn", thirdPage);
$(document).on("click", "#submit-btn", fourthPage);
$(document).on("click", "#restart-btn", thirdPage);
