$(document).ready(function(){
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value === "all")
        {
            $('.filter').show(2000);
        }
        else
        {
            $(".filter").not('.'+value).hide(2000);
            $('.filter').filter('.'+value).show(2000);
        }

        if (!$(this).hasClass('active')) {
            $(".filter-button").removeClass('active');
            $(this).addClass('active');
        }

    });


    function animateElements() {
        $('.progressbar').each(function() {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    thickness: 3,
                    fill: {
                        color: '#FF0036'
                    }
                }).on('circle-animation-progress', function(event, progress, stepValue) {
                    $(this).find('div').text((stepValue * 100).toFixed(0) + "%");
                }).stop();
            }
        });
    }
    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);


    $("#formButton").click(function() {
        $("#form1").toggle();
    });


    $('.card-header').click(function () {
        if (!$(this).hasClass('active')) {
            $('.card-header').removeClass('active');
            $(this).addClass('active');
            $('.card-header').find('i').removeAttr('class');
            $('.card-header').find('i').addClass('fa fa-plus');
            $(this).find('i').addClass('fa fa-minus');
        }else {
            $(this).removeClass('active');
            $(this).find('i').removeAttr('class');
            $(this).find('i').addClass('fa fa-plus');
        }
    });





    $('#btn_down').on('click', function () {

        if ($('.blog_row').hasClass('hide')){

                $('.blog_row.hide').eq(0).removeClass('hide').addClass('show');
                $('.blog_row.hide').eq(1-1).removeClass('hide').addClass('show');

            if (!$('.blog_row').hasClass('hide')){
                $(this).css('transform', 'rotate(180deg)');
            }

        }else {
            $('.blog_row.show').removeClass('show').addClass('hide');
            $(this).css('transform', 'none');
        }


    });





});