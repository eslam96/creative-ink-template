// $(document).ready(function(){
//     $(".hero-section").fadeIn(3000);

// })

$(".btn-green").click(function(e){

    e.preventDefault();

    let target = $('#' + $(this).data("scroll"));

    $("html, body").animate({

        scrollTop: target.offset().top
                

    }, 2000);

    target.animate({
        opacity: 1
    },3000);

    

})