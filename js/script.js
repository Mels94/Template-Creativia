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

/*        if ($(this).attr('data-filter') === 'filter-illustration' || 'filter-digital' || 'filter-web') {

            //console.log($('.gallery_product').filter('.filter-illustration'));
            $('.gallery_product').filter('.filter-illustration').css('height', '204px');
            $('.gallery_product').filter('.filter-digital').css('height', '204px');
            $('.gallery_product').filter('.filter-web').css('height', '204px');
            //$('#portfolio .box2').attr('class','filter-illustration').css('height', '100%');

        }
        if ($(this).attr('data-filter') === 'all') {
            $('.gallery_product').css('height', '50%');
        }*/

    });



});