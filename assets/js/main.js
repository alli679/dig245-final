
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

$(".goal-2").draggable({
  drag: function(){
    $(".goal-2").css({
      "z-index": ++dragZ
    });
  },
});

$(".goal-3").draggable({
  drag: function(){
    $(".goal-3").css({
      "z-index": ++dragZ
    });
  },
});

$(".goal-4").draggable({
  drag: function(){
    $(".goal-4").css({
      "z-index": ++dragZ
    });
  },
});

$(".goal-5").draggable({
  drag: function(){
    $(".goal-5").css({
      "z-index": ++dragZ
    });
  },
});

$(".goal-6").draggable({
  drag: function(){
    $(".goal-6").css({
      "z-index": ++dragZ
    });
  },
});

$(".goal-7").draggable({
  drag: function(){
    $(".goal-7").css({
      "z-index": ++dragZ
    });
  },
});

$(".goal-8").draggable({
  drag: function(){
    $(".goal-8").css({
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
