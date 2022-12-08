
/* javascript */
var patternSelected = false;
let dragZ = 10;
let goalsSelected = [false, false, false, false, false, false, false, false, false, false];
let deceptiveGoals = [2, 3, 4, 6, 7, 9];

$(".pattern-item").draggable({
  start: function(event, ui){
    $(this).css({
      "z-index": ++dragZ,
    });
  },

  revert: function(dropElem){
    let item = $(this).data("item");
    let className = "pattern-" + item;
    console.log(item, className);

    if (dropElem && dropElem.hasClass("goal-area")){
      patternSelected = true;
      goalsSelected[item] = true;

      $("#submit-btn").css({
        "background-color": "#B0DB43"
      });

      console.log("goalsSelected", goalsSelected);
      for (var i = 0; i < deceptiveGoals.length; i++){
        if (item === deceptiveGoals[i]){
          $(this).addClass("pattern-item-true");
        }
      }
      return false;
    } else {
      goalsSelected[item]= false;
      checkMainGoal();

      if (patternSelected === false){
        $("#submit-btn").css({
          "background-color": "gray"
        });
      }

      $(this).removeClass("pattern-item-true").css({
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

  if (patternSelected === false) {
    $("#submit-btn").css({
      "background-color": "gray"
    });
  }
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

    var i = 0;

    for(i; i < goalsSelected.length; i++) {
      let className = "results-" + i;

      if (goalsSelected[i] === false) {
        $("." + className).hide();
      } else {
        $("." + className).show();
      }
    }
  }
}

// Add new functions

$(document).on("click", "#start-btn", secondPage);
$(document).on("click", "#continue-btn", thirdPage);
$(document).on("click", "#submit-btn", fourthPage);
$(document).on("click", "#restart-btn", thirdPage);
