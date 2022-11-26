
/* javascript */
var goalSelected = false;
let dragZ = 10;
let startPos;
let goal1Selected, goal2Selected, goal3Selected, goal4Selected, goal5Selected, goal6Selected, goal7Selected, goal8Selected,goal9Selected, goal10Selected = false;

$(".goal-1").draggable({
  drag: function(){
    $(".goal-1").css({
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
      goal1Selected = true;
      console.log(goalSelected);
      console.log(goal1Selected);
      $(".goal-1").css({
        position: "absolute"
      });
      return false;
    } else {
      if (!goal2Selected && !goal3Selected && !goal4Selected && !goal5Selected && !goal6Selected && !goal7Selected && !goal8Selected && !goal9Selected && !goal10Selected) {
        goalSelected = false;
      }
      goal1Selected = false;
      $(".goal-1").css({
        top: startPos.top,
        left: startPos.left,
        position: "static"
      });
      return false;
    }
  }
});

$(".goal-2").draggable({
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
});

$(".goal-3").draggable({
  drag: function(){
    $(".goal-3").css({
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
      goal3Selected = true;
      console.log(goalSelected);
      console.log(goal3Selected);
      $(".goal-3").css({
        position: "absolute"
      });
      return false;
    } else {
      if (!goal1Selected && !goal2Selected && !goal4Selected && !goal5Selected && !goal6Selected && !goal7Selected && !goal8Selected && !goal9Selected && !goal10Selected) {
        goalSelected = false;
      }
      goal3Selected = false;
      $(".goal-3").css({
        top: startPos.top,
        left: startPos.left,
        position: "static"
      });
      return false;
    }
  }
});

$(".goal-4").draggable({
  drag: function(){
    $(".goal-4").css({
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
      goal4Selected = true;
      console.log(goalSelected);
      console.log(goal4Selected);
      $(".goal-4").css({
        position: "absolute"
      });
      return false;
    } else {
      if (!goal1Selected && !goal2Selected && !goal3Selected && !goal5Selected && !goal6Selected && !goal7Selected && !goal8Selected && !goal9Selected && !goal10Selected) {
        goalSelected = false;
      }
      goal4Selected = false;
      $(".goal-4").css({
        top: startPos.top,
        left: startPos.left,
        position: "static"
      });
      return false;
    }
  }
});

$(".goal-5").draggable({
  drag: function(){
    $(".goal-5").css({
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
      goal5Selected = true;
      console.log(goalSelected);
      console.log(goal5Selected);
      $(".goal-5").css({
        position: "absolute"
      });
      return false;
    } else {
      if (!goal1Selected && !goal2Selected && !goal3Selected && !goal4Selected && !goal6Selected && !goal7Selected && !goal8Selected && !goal9Selected && !goal10Selected) {
        goalSelected = false;
      }
      goal5Selected = false;
      $(".goal-5").css({
        top: startPos.top,
        left: startPos.left,
        position: "static"
      });
      return false;
    }
  }
});

$(".goal-6").draggable({
  drag: function(){
    $(".goal-6").css({
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
      goal6Selected = true;
      console.log(goalSelected);
      console.log(goal6Selected);
      $(".goal-6").css({
        position: "absolute"
      });
      return false;
    } else {
      if (!goal1Selected && !goal2Selected && !goal3Selected && !goal4Selected && !goal5Selected && !goal7Selected && !goal8Selected && !goal9Selected && !goal10Selected) {
        goalSelected = false;
      }
      goal6Selected = false;
      $(".goal-6").css({
        top: startPos.top,
        left: startPos.left,
        position: "static"
      });
      return false;
    }
  }
});

$(".goal-7").draggable({
  drag: function(){
    $(".goal-7").css({
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
      goal7Selected = true;
      console.log(goalSelected);
      console.log(goal7Selected);
      $(".goal-7").css({
        position: "absolute"
      });
      return false;
    } else {
      if (!goal1Selected && !goal2Selected && !goal3Selected && !goal4Selected && !goal5Selected && !goal6Selected && !goal8Selected && !goal9Selected && !goal10Selected) {
        goalSelected = false;
      }
      goal7Selected = false;
      $(".goal-7").css({
        top: startPos.top,
        left: startPos.left,
        position: "static"
      });
      return false;
    }
  }
});

$(".goal-8").draggable({
  drag: function(){
    $(".goal-8").css({
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
      goal8Selected = true;
      console.log(goalSelected);
      console.log(goal8Selected);
      $(".goal-8").css({
        position: "absolute"
      });
      return false;
    } else {
      if (!goal1Selected && !goal2Selected && !goal3Selected && !goal4Selected && !goal5Selected && !goal6Selected && !goal7Selected && !goal9Selected && !goal10Selected) {
        goalSelected = false;
      }
      goal8Selected = false;
      $(".goal-8").css({
        top: startPos.top,
        left: startPos.left,
        position: "static"
      });
      return false;
    }
  }
});

$(".goal-9").draggable({
  drag: function(){
    $(".goal-9").css({
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
      goal9Selected = true;
      console.log(goalSelected);
      console.log(goal9Selected);
      $(".goal-9").css({
        position: "absolute"
      });
      return false;
    } else {
      if (!goal1Selected && !goal2Selected && !goal3Selected && !goal4Selected && !goal5Selected && !goal6Selected && !goal7Selected && !goal8Selected && !goal10Selected) {
        goalSelected = false;
      }
      goal9Selected = false;
      $(".goal-9").css({
        top: startPos.top,
        left: startPos.left,
        position: "static"
      });
      return false;
    }
  }
});

$(".goal-10").draggable({
  drag: function(){
    $(".goal-10").css({
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
      goal10Selected = true;
      console.log(goalSelected);
      console.log(goal10Selected);
      $(".goal-10").css({
        position: "absolute"
      });
      return false;
    } else {
      if (!goal1Selected && !goal2Selected && !goal3Selected && !goal4Selected && !goal5Selected && !goal6Selected && !goal7Selected && !goal8Selected && !goal9Selected) {
        goalSelected = false;
      }
      goal10Selected = false;
      $(".goal-10").css({
        top: startPos.top,
        left: startPos.left,
        position: "static"
      });
      return false;
    }
  }
});

$(".goal-area").droppable({});

firstPage();

function firstPage(){
  $(".start").show();
  $(".main").hide();
  $(".results").hide();
}

function secondPage(){
  $(".start").hide();
  $(".main").show();
  $(".results").hide();
}

function thirdPage(){
  if (goalSelected) {
    $(".start").hide();
    $(".main").hide();
    $(".results").show();

    if (!goal1Selected) {
      $(".results-1").hide();
    } else {
      $(".results-1").show();
    }
    if (!goal2Selected) {
      $(".results-2").hide();
    } else {
      $(".results-2").show();
    }
    if (!goal3Selected) {
      $(".results-3").hide();
    } else {
      $(".results-3").show();
    }
    if (!goal4Selected) {
      $(".results-4").hide();
    } else {
      $(".results-4").show();
    }
    if (!goal5Selected) {
      $(".results-5").hide();
    } else {
      $(".results-5").show();
    }
    if (!goal6Selected) {
      $(".results-6").hide();
    } else {
      $(".results-6").show();
    }
    if (!goal7Selected) {
      $(".results-7").hide();
    } else {
      $(".results-7").show();
    }
    if (!goal8Selected) {
      $(".results-8").hide();
    } else {
      $(".results-8").show();
    }
    if (!goal9Selected) {
      $(".results-9").hide();
    } else {
      $(".results-9").show();
    }
    if (!goal10Selected) {
      $(".results-10").hide();
    } else {
      $(".results-10").show();
    }
  }
}

// Add new functions

$(document).on("click", "#start-btn", secondPage);
$(document).on("click", "#submit-btn", thirdPage);
$(document).on("click", "#restart-btn", secondPage);
