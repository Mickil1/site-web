
$('map').imageMapResize();

//pop-up map
$('area').each(function(){
    var area = $(this),
        alt = area.attr('alt');
    area.mouseenter(function(){
        $('#Overlay').html(alt);
    }).mouseleave(function(){
        $('#Pverlay').html('');
    });
});