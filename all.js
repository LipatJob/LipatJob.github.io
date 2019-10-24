$(document).ready(function(){
    $('#fixednavbar').fadeOut(250);
    $('#navigation a, #fixedbar a').on('click', function(e) {
        e.preventDefault();
    });
    
    $(window).on('scroll',function() {
        var scrolltop = $(this).scrollTop();
        
        var $nav = $("#navbar");
        if(scrolltop >= $nav.offset().top + $nav.height()) {
            $('#fixednavbar').fadeIn(250);
        }
        else {
            $('#fixednavbar').fadeOut(250);
        }
    });
});