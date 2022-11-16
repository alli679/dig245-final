
/* javascript */
var goalSelected = false;
let dragZ = 10;

$(".goal-1").draggable({
  drag: function(){
    $(".goal-1").css({
      "z-index": ++dragZ
    });
  },

  revert: function(dropElem){
    console.log(goalSelected);
    if (dropElem && dropElem.hasClass(".goal-area")){
      goalSelected = true;
    }
  }
});

$(".goal-area").droppable({
  accept: ".goal-1 .goal-2 .goal-3 .goal-4 .goal-5 .goal-6 .goal-7 .goal-8"
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
