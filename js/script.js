
$(function() {

  var countFont = 120;
  var countOpacity = 0.5;
  var countDelay = 0.5;
  var countIndex = 1;
  var topPosition = 50;

  for (var i = 0; i < 2; i++) {
    $('.container').append('<h1 class="heading next' + ' hidden animated bounceIn '+'delay-'+ countDelay +'s"'+ '>SH!T</h1>');
        countDelay ++;
    }

  $('.next').each(function(value) {
    $(this).css({
      'fontSize': countFont + 'px',
      'opacity': countOpacity,
      'z-index': countIndex,
      'top': topPosition + '%',
    })
    $(this).removeClass('heading')
    countFont += 50;
    countOpacity -= 0.1;
    countIndex--;
    topPosition -= 2;
  })
  setTimeout(function() {
    $('h1' ).removeClass('hidden');
  }, 500);



});
