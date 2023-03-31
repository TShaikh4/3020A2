$(document).ready(function() {
     var container = $('#container');
     var ballCount = 5;
     
     //creating 5 balls at random positions within the window.
     for (var i = 0; i < ballCount; i++) {
         var left = Math.floor(Math.random() * ($(window).width() - 50));//ensures balls are created within our visible window
         var top = Math.floor(Math.random() * ($(window).height() - 50));
         var ball = $('<div class="ball"></div>').css({
             'left': left + 'px',
             'top': top + 'px'
         });
         container.append(ball); //adds the ball elements we have created to the container
     }
    
      //moving the ball in the position where the user clicked, and allowing them to fadeout when they have reached the hole.
    $('.ball').click(function(event){
        var xVal= event.pageX - this.offsetLeft;
        var yVal = event.pageY - this.offsetTop;
        var newX = event.pageX + (xVal-60); //new position after ball is clicked
        var newY = event.pageY + (yVal-60); 
        $(this).animate({"top": newY, "left": newX}, "fast"); //moves the ball to the new position
        
        var ball = $(this); 

        //coverting the strings into integers, to use in calculations ahead
        var ballX = parseInt(ball.css("left"));
        var ballY = parseInt(ball.css("top"));

        //values for the center of the hole
        var holeX = $(window).width() / 2 - $("#hole").width() / 2; 
        var holeY = $(window).height() / 2 - $("#hole").height() / 2; 

        //distance between the center of the ball and center of the hole 
        var distance = Math.sqrt(Math.pow(ballX - holeX, 2) + Math.pow(ballY - holeY, 2)); 
        
        //fades out the ball as it reaches the hole
        if (distance < 100){ 
            ball.animate({
                opacity: 0,
                top: '+=50'
             }, 1000);
             ball.fadeout();
        }
    });
});