
/* javascript */
let goalSelected = false;
let dragZ = 10;

$(".goal").draggable({
  drag: function(){
    $(".goal").css({
      "z-index": ++dragZ
    });
  },

  revert: function(dropElem){
    if (dropElem && dropElem.hasClass(".goal-area")){
      goalSelected = true;
    } else {
      goalSelected = false;
    }
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
