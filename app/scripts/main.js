$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
         menu: '#myMenu',
         menu: true,
         sectionsColor: ['', '', '', '', '#bc357b', '#000'],
         navigation: true,
		css3: true,
		scrollingSpeed: 1000,
		scrollOverflow: true,


         onLeave: function(anchor, index){
          if(index > 3){
               $('#fixedForm').hide("slide", { direction: "up" }, 300);
          }
          else {
          	$('#fixedForm').show("slide", { direction: "down" }, 800);
          }
      }

      
    });
});

