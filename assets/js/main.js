
/* javascript */
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
$(document).on("click", "#main-btn", thirdPage);
$(document).on("click", "#restart-btn", secondPage);
