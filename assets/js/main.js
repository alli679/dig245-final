
/* javascript */
var goalSelected = false;
let dragZ = 10;

$(".goal-1").draggable({
  drag: function(){
    $(".goal-1").css({
      "z-index": ++dragZ
    });
  },
});

$(".goal-area").droppable({


  drop: function(){
    goalSelected = true;
    console.log(goalSelected);
  }
});

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
