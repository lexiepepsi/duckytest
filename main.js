$(document).ready(function() {
	// alert("Are you feeling lucky today?");
	// 6 seconds, 1600px

	$("#score-display").text(0);

	$( "#duck1a" ).click(function() {
	  	$("#score-display").html(function(i, val) { return +val+1 });
      $("#duck1a").css("display", "none");
	});

  $( "#duck1b" ).click(function() {
      $("#score-display").html(function(i, val) { return +val+1 });
      $("#duck1b").css("display", "none");
  });

   $( "#duck1c" ).click(function() {
      $("#score-display").html(function(i, val) { return +val+1 });
      $("#duck1c").css("display", "none");
  });



	$( "#clickme" ).click(function() {
  		$( "#duck1a" ).animate({
   		 	left: "+=500",
  		}, 1000, function() {
  		});

  		$( "#duck1a" ).animate({
   		 	left: "+=500",
  		}, 1000, function() {
  		});

  		$( "#duck1a" ).animate({
   		 	left: "+=100",
  		}, 2000, function() {
  		});

  		$( "#duck1a" ).animate({
   		 	left: "+=500",
  		}, 1000, function() {
  		});

	// GO BACK HOME DUCKS
  		$( "#duck1a" ).animate({
   			left: "-=1600",
  			}, 1000, function() {
          $("#duck1a").css("display", "initial");
 		});
	});


	$( "#clickme" ).click(function() {
  		$( "#duck1b" ).animate({
   		 	left: "+=20",
  		}, 3000, function() {
  		});

  		$( "#duck1b" ).animate({
   		 	left: "+=800",
  		}, 1000, function() {
  		});

  		$( "#duck1b" ).animate({
   		 	left: "+=100",
  		}, 1000, function() {
  		});

  		$( "#duck1b" ).animate({
   		 	left: "+=680",
  		}, 1000, function() {
  		});

	// GO BACK HOME DUCKS
  		$( "#duck1b" ).animate({
   			left: "-=1600",
  			}, 1000, function() {
          $("#duck1b").css("display", "initial");
 		});
	});


	$( "#clickme" ).click(function() {
  		$( "#duck1c" ).animate({
   		 	left: "+=300",
  		}, 3000, function() {
  		});

  		$( "#duck1c" ).animate({
   		 	left: "+=300",
  		}, 1000, function() {
  		});

  		$( "#duck1c" ).animate({
   		 	left: "+=800",
  		}, 1000, function() {
  		});

  		$( "#duck1c" ).animate({
   		 	left: "+=200",
  		}, 1000, function() {
  		});

	// GO BACK HOME DUCKS
  		$( "#duck1c" ).animate({
   			left: "-=1600",
  			}, 1000, function() {
          $("#duck1c").css("display", "initial");
 		});
	});


	$( "#clickme" ).click(function() {
  		$( "#duck2a" ).animate({
   		 	left: "+=50",
  		}, 1000, function() {
  		});

  		$( "#duck2a" ).animate({
   		 	left: "+=800",
  		}, 2000, function() {
  		});

  		$( "#duck2a" ).animate({
   		 	left: "+=200",
  		}, 1000, function() {
  		});

  		$( "#duck2a" ).animate({
   		 	left: "+=550",
  		}, 2000, function() {
  		});

	// GO BACK HOME DUCKS
  		$( "#duck2a" ).animate({
   			left: "-=1600",
  			}, 1000, function() {
 		});
	});


	$( "#clickme" ).click(function() {
  		$( "#duck2b" ).animate({
   		 	left: "+=400",
  		}, 1000, function() {
  		});

  		$( "#duck2b" ).animate({
   		 	left: "+=600",
  		}, 2000, function() {
  		});

  		$( "#duck2b" ).animate({
   		 	left: "+=200",
  		}, 2000, function() {
  		});

  		$( "#duck2b" ).animate({
   		 	left: "+=400",
  		}, 1000, function() {
  		});

  	// GO BACK HOME DUCKS
  		$( "#duck2b" ).animate({
   			left: "-=1600",
  			}, 1000, function() {
 		});
	});

	$( "#clickme" ).click(function() {
  		$( "#duck2c" ).animate({
   		 	left: "+=20",
  		}, 2000, function() {
  		});

  		$( "#duck2c" ).animate({
   		 	left: "+=780",
  		}, 1000, function() {
  		});

  		$( "#duck2c" ).animate({
   		 	left: "+=100",
  		}, 2000, function() {
  		});

  		$( "#duck2c" ).animate({
   		 	left: "+=700",
  		}, 1000, function() {
  		});

	// GO BACK HOME DUCKS
  		$( "#duck2c" ).animate({
   			left: "-=1600",
  			}, 1000, function() {
 		});
	});


	$( "#clickme" ).click(function() {
  		$( "#duck3a" ).animate({
   		 	left: "+=200",
  		}, 3000, function() {
  		});

  		$( "#duck3a" ).animate({
   		 	left: "+=700",
  		}, 1500, function() {
  		});

  		$( "#duck3a" ).animate({
   		 	left: "+=100",
  		}, 500, function() {
  		});

  		$( "#duck3a" ).animate({
   		 	left: "+=600",
  		}, 1000, function() {
  		});

  	// GO BACK HOME DUCKS
  		$( "#duck3a" ).animate({
   			left: "-=1600",
  			}, 1000, function() {
 		});
	});


	$( "#clickme" ).click(function() {
  		$( "#duck3b" ).animate({
   		 	left: "+=100",
  		}, 1500, function() {
  		});

  		$( "#duck3b" ).animate({
   		 	left: "+=400",
  		}, 2000, function() {
  		});

  		$( "#duck3b" ).animate({
   		 	left: "+=400",
  		}, 1000, function() {
  		});

  		$( "#duck3b" ).animate({
   		 	left: "+=700",
  		}, 1500, function() {
  		});

  	// GO BACK HOME DUCKS
  		$( "#duck3b" ).animate({
   			left: "-=1600",
  			}, 1000, function() {
 		});
	});

	$( "#clickme" ).click(function() {
  		$( "#duck3c" ).animate({
   		 	left: "+=700",
  		}, 1000, function() {
  		});

  		$( "#duck3c" ).animate({
   		 	left: "+=100",
  		}, 2000, function() {
  		});

  		$( "#duck3c" ).animate({
  			left: "+=200",
  		}, 2000, function() {
  		});

  		$( "#duck3c" ).animate({
   		 	left: "+=600",
  		}, 1000, function() {
  		});

  	// GO BACK HOME DUCKS
  		$( "#duck3c" ).animate({
   			left: "-=1600",
  			}, 1000, function() {
 		});
	});


	$( "#clickme" ).click(function() {
  		$( "#duck4a" ).animate({
   		 	left: "+=200",
  		}, 500, function() {
  		});

  		$( "#duck4a" ).animate({
   		 	left: "+=600",
  		}, 2000, function() {
  		});

  		$( "#duck4a" ).animate({
   		 	left: "+=100",
  		}, 2000, function() {
  		});

  		$( "#duck4a" ).animate({
   		 	left: "+=700",
  		}, 1500, function() {
  		});

  		// GO BACK HOME DUCKS
  		$( "#duck4a" ).animate({
   			left: "-=1600",
  			}, 1000, function() {
 		});
	});


	$( "#clickme" ).click(function() {
  		$( "#duck4b" ).animate({
   		 	left: "+=300",
  		}, 500, function() {
  		});

  		$( "#duck4b" ).animate({
   		 	left: "+=300",
  		}, 1500, function() {
  		});

  		$( "#duck4b" ).animate({
   		 	left: "+=400",
  		}, 2000, function() {
  		});

  		$( "#duck4b" ).animate({
   		 	left: "+=600",
  		}, 2000, function() {
  		});

  	// GO BACK HOME DUCKS
  		$( "#duck4b" ).animate({
   			left: "-=1600",
  			}, 1000, function() {
 		});

	});

	$( "#clickme" ).click(function() {
  		$( "#duck4c" ).animate({
   		 	left: "+=200",
  		}, 500, function() {
  		});

  		$( "#duck4c" ).animate({
   		 	left: "+=600",
  		}, 2000, function() {
  		});

  		$( "#duck4c" ).animate({
   		 	left: "+=100",
  		}, 2000, function() {
  		});

  		$( "#duck4c" ).animate({
   		 	left: "+=700",
  		}, 1500, function() {
  		});

  	// GO BACK HOME DUCKS
  		$( "#duck4c" ).animate({
   			left: "-=1600",
  			}, 1000, function() {
 		});

	});


});