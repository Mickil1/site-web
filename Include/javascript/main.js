$('map').imageMapResize();

//pop-up map
/*
$('area').each(function(){
    var area = $(this),
        alt = area.attr('alt');
    area.mouseenter(function(){
        $('#Overlay').css('top')
        $('#Overlay').html(alt);
    }).mouseleave(function(){
        $('#Overlay').html('');
    });
});
*/
var moveLeft = -30;
var moveDown = -140;

$('area').each(function(){
  var area = $(this),
      alt = area.attr('alt');
  area.hover(function(e){
    $('#Overlay').html(alt);
    $('#Overlay').show();
  },function(){
    $('#Overlay').hide();
  });

  area.mousemove(function(e){
    $('#Overlay').css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
})
