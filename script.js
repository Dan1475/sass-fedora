function changeBG(){
  var activeDiv = $('.active');
  activeDiv.removeClass('active');
  var nextDiv = activeDiv.next('div');
  if (activeDiv.hasClass('last')) {
    nextDiv = $('div.first');
  }
  nextDiv.addClass('active');
}



function init(){
setInterval(changeBG, 5000);

}

$(document).ready(init);
