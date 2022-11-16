
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
  accept: ".goal-1"
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
