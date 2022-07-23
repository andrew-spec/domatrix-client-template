   var clicked = true;
   $("#startMenuSlidingTrigger").on('click', function() {
     if (clicked) {
       clicked = false;
       $(this).html('<h3 class="nopadding">close options/help 🡶</h3>');
       $(".slider").css({
         "top": "-275px"
       })
     } else {
       clicked = true;
       $(this).html('<h3 class="nopadding">view options/help 🡲</h3>');
       $(".slider").css({
         "top": 0
       });
     }
   });
