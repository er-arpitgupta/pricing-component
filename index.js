var total = $('#pricing').length;
var current = 1;

$(document).ready(function () {
    if ($('.current').text() == total) {
        $('.next').addClass('disabled')
    }
})

$('.previous').click(function () {
    if (current > 1) {
        current -= 1;
        $('.current').text(current)
        $('.container >div').css('display', 'none');
        $(`.container .pricing${current}`).css('display', 'flex');
    }
})

$('.next').click(function () {
    if (current < total) {
        current += 1;
        $('.current').text(current)
        $('.container >div').css('display', 'none');
        $(`.container .pricing${current}`).css('display', 'flex');    
    }
})

var isChecked = true

$('.pricing1 label').click(function () {
    if (isChecked) {
        $('.plan-category:nth-child(1) .price-tag').text('$ 19.99')
        $('.plan-category:nth-child(2) .price-tag').text('$ 24.99')
        $('.plan-category:nth-child(3) .price-tag').text('$ 39.99')
        isChecked = false;
    }
    else {
        $('.plan-category:nth-child(1) .price-tag').text('$ 199.99')
        $('.plan-category:nth-child(2) .price-tag').text('$ 249.99')
        $('.plan-category:nth-child(3) .price-tag').text('$ 399.99')
        isChecked = true;
    }
})