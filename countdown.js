// Javascript
$(function() {
  var currentDate = new Date(2020,08,29,20,00,00);
//  $('.countdown').countdown("yyyy/MM/dd/hh:mm:ss", function(event)
//	Delete line 6
  $('.time').countdown(currentDate.valueOf(), function(event)
//	until here
	{
    $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('span.'+event.type).html(event.value);
        break;
      case "finished":
        $this.fadeTo('slow', .5);
        break;
    }
  });
});


