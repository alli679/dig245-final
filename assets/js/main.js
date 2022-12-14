
/* javascript */
var patternSelected = false;
let dragZ = 10;
let patternsSelected = [false, false, false, false, false, false, false, false, false, false];
let deceptivePatterns = [2, 3, 4, 6, 7, 9];

// Viewed code from: https://stackoverflow.com/questions/12744928/in-jquery-how-can-i-set-top-left-properties-of-an-element-with-position-values
// https://stackoverflow.com/questions/49883153/if-a-strict-mode-function-is-executed-using-function-invocation-its-this-valu
// https://stackoverflow.com/questions/12350259/original-position-of-a-draggable-in-jquery-ui
// https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element

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
  $(".intro-mobile").hide();
  $(".main").hide();
  $(".results").hide();

  if (patternSelected === false) {
    $("#submit-btn").css({
      "background-color": "gray"
    });
    $("#submit-btn-mobile").css({
      "background-color": "gray"
    });
  }
}

function secondPageMobile(){
  $(".start").hide();
  $(".intro").show();
  $(".intro-desktop").hide();
  $(".main").hide();
  $(".results").hide();

  if (patternSelected === false) {
    $("#submit-btn").css({
      "background-color": "gray"
    });
    $("#submit-btn-mobile").css({
      "background-color": "gray"
    });
  }
}

function thirdPage(){
  $(".start").hide();
  $(".intro").hide();
  $(".main").show();
  $(".main-mobile").hide();
  $("#submit-btn-mobile").hide();
  $(".results").hide();
}

function thirdPageMobile(){
  $(".start").hide();
  $(".intro").hide();
  $(".main").show();
  $(".main-desktop").hide();
  $("#submit-btn").hide();
  $(".results").hide();
}

function checkButton(){
  let item = $(this).data("item");

  if (patternsSelected[item] === false) {
    patternsSelected[item] = true;
    patternSelected = true;

    $("#submit-btn-mobile").css({
      "background-color": "#B0DB43"
    });

    $(this).css({
      "background-color": "blue"
    });

    for (var i = 0; i < deceptivePatterns.length; i++){
      if (item === deceptivePatterns[i]){
        $(this).css({
          "background-color": "#DB2763"
        });
      }
    }
  } else {
    patternsSelected[item] = false;
    $(this).css({
      "background-color": "#12EAEA"
    });
    checkMainGoal();

    if (patternSelected === false){
      $("#submit-btn-mobile").css({
        "background-color": "gray"
      });
    }
  }
}

function fourthPage(){
  if (patternSelected) {
    $(".start").hide();
    $(".intro").hide();
    $(".main").hide();
    $(".results").show();
    $("#restart-btn-mobile").hide();

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

function fourthPageMobile(){
  if (patternSelected) {
    $(".start").hide();
    $(".intro").hide();
    $(".main").hide();
    $(".results").show();
    $("#restart-btn").hide();

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
$(document).on("click", "#start-btn-mobile", secondPageMobile);
$(document).on("click", "#continue-btn", thirdPage);
$(document).on("click", "#continue-btn-mobile", thirdPageMobile);
$(document).on("click", ".pattern-button", checkButton);
$(document).on("click", "#submit-btn", fourthPage);
$(document).on("click", "#submit-btn-mobile", fourthPageMobile);
$(document).on("click", "#restart-btn", thirdPage);
$(document).on("click", "#restart-btn-mobile", thirdPageMobile);
