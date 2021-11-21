// User Interface Logic

$(document).ready(function() {
    $("div#des").click(function() {
      $("div#des-content").toggle();
      $("div#des").toggle();
    });

    $("div#des-content").click(function() {
        $("div#des-content").toggle();
        $("div#des").toggle();
      });

      $("div#dev").click(function() {
        $("div#dev-content").toggle();
        $("div#dev").toggle();
      });
  
      $("div#dev-content").click(function() {
          $("div#dev-content").toggle();
          $("div#dev").toggle();
        });

        $("div#pro").click(function() {
            $("div#pro-content").toggle();
            $("div#pro").toggle();
          });
      
          $("div#pro-content").click(function() {
              $("div#pro-content").toggle();
              $("div#pro").toggle();
            });


            
        });