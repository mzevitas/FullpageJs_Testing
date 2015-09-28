$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
         menu: '#myMenu',
         menu: true,
         sectionsColor: ['', '#4BBFC3', '#7BAABE', 'whitesmoke', '#fff'],
         navigation: true,
		css3: true,
		scrollingSpeed: 600,
		scrollOverflow: true,


         onLeave: function(anchor, index){
          if(index > 3){
               $('#fixedForm').hide("slide", { direction: "up" }, 100);
          }
          else {
          	$('#fixedForm').show("slide", { direction: "left" }, 1000);
          }
      }

      
    });
});

