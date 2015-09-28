$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
         menu: '#myMenu',
         menu: true,
         sectionsColor: ['', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
         navigation: true,

         
         onLeave: function(anchor, index){
          if(index > 3){
               $('#fixedForm').fadeOut(20);
          }
          else {
          	$('#fixedForm').fadeIn(1000);
          }
      }

    });
});

