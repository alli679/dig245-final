
/* javascript */
var goalSelected = false;
let dragZ = 10;
let startPos;

$(".goal-1").draggable({
  drag: function(){
    $(".goal-1").css({
      "z-index": ++dragZ
    });
  },

  start: function(event, ui){
    startPos = ui.helper.position();
  },

  revert: function(dropElem){
    if (dropElem && dropElem.hasClass("goal-area")){
      goalSelected = true;
      console.log(goalSelected);
      return false;
    } else {
      goalSelected = false;

      // Add code to return it to its original position
      $(".goal-1").css({
        top: startPos.top,
        left: startPos.left
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

  revert: "invalid"
});

$(".goal-3").draggable({
  drag: function(){
    $(".goal-3").css({
      "z-index": ++dragZ
    });
  },

  revert: "invalid"
});

$(".goal-4").draggable({
  drag: function(){
    $(".goal-4").css({
      "z-index": ++dragZ
    });
  },

  revert: "invalid"
});

$(".goal-5").draggable({
  drag: function(){
    $(".goal-5").css({
      "z-index": ++dragZ
    });
  },

  revert: "invalid"
});

$(".goal-6").draggable({
  drag: function(){
    $(".goal-6").css({
      "z-index": ++dragZ
    });
  },

  revert: "invalid"
});

$(".goal-7").draggable({
  drag: function(){
    $(".goal-7").css({
      "z-index": ++dragZ
    });
  },

  revert: "invalid"
});

$(".goal-8").draggable({
  drag: function(){
    $(".goal-8").css({
      "z-index": ++dragZ
    });
  },

  revert: "invalid"
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
  }
}

$(document).on("click", "#start-btn", secondPage);
$(document).on("click", "#submit-btn", thirdPage);
$(document).on("click", "#restart-btn", secondPage);
