
/* javascript */
var patternSelected = false;
let dragZ = 10;
let patternsSelected = [false, false, false, false, false, false, false, false, false, false];
let deceptivePatterns = [2, 3, 4, 6, 7, 9];

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
      patternsSelected[item] = true;

      $("#submit-btn").css({
        "background-color": "#B0DB43"
      });

      console.log("patternsSelected", patternsSelected);
      for (var i = 0; i < deceptivePatterns.length; i++){
        if (item === deceptivePatterns[i]){
          $(this).addClass("pattern-item-true");
        }
      }
      return false;
    } else {
      patternsSelected[item]= false;
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
  for(var i = 0; i < patternsSelected.length; i++) {
    if (patternsSelected[i] === true){
      selected = true;

      break;
    }
  }
  patternSelected = selected;
  console.log("Pattern selected", patternsSelected);
  console.log("patternSelected", patternSelected);
}

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
  $(".main-mobile").hide();
  $(".results").hide();
}

function thirdPageMobile(){
  $(".start").hide();
  $(".intro").hide();
  $(".main").show();
  $(".main-desktop").hide();
  $(".results").hide();
}

function fourthPage(){
  if (patternSelected) {
    $(".start").hide();
    $(".intro").hide();
    $(".main").hide();
    $(".results").show();

    var i = 0;

    for(i; i < patternsSelected.length; i++) {
      let className = "results-" + i;

      if (patternsSelected[i] === false) {
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
$(document).on("click", "#continue-btn-mobile", thirdPageMobile);
$(document).on("click", "#submit-btn", fourthPage);
$(document).on("click", "#restart-btn", thirdPage);
