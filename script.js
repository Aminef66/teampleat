$(document).ready(function() {
    $('.menu  img ').click(function() {
        let popup = $(' .responsive__nav ');
        popup.show();
        popup.animate({
            top: '0px'
        }, 1000);
    })
})

$(document).ready(function() {
    $('.close img ').click(function() {
        let popup = $(' .responsive__nav ');
        popup.show();
        popup.animate({
            top: '-600px'
        }, 1000);
    })
})