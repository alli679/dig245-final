
/* javascript */
let goalSelected = false;

$(".goal").draggable({
  revert: function(dropElem){
    if (dropElem && dropElem.hasId("#goal-area")){
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
  $(".start").hide();
  $(".main").hide();
  $(".results").show();
}

$(document).on("click", "#start-btn", secondPage);
$(document).on("click", "#submit-btn", thirdPage);
$(document).on("click", "#restart-btn", secondPage);
