$( document ).ready(function() {
    function cameraText () {
        $('.overlay').fadeIn();
        $('.overlay').delay(10000).fadeOut();
    }
    $('.cover-photo').on('click', cameraText);

    $(window).on('scroll', function () {
        var distanceScrolled = $(window).scrollTop();
        console.log(distanceScrolled)
        if (distanceScrolled >= 10) {
            $('nav').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled')
        }
    });
    /* ---------------------------------------------
    Attempt to write function to calculate window size
    ------------------------------------------------ */
// var windowWidth = $(window).width();
// function windowWidthOne() {

//     if (windowWidth === 932 || windowWidth < 1000) {
//          $('#cusco-text').css({"margin": "45px", "padding-top": "115"});
//          $('#cusco').hover(function() {
//             $('#cusco-text').fadeIn('slow');
//         }, function(){
//             $('#cusco-text').fadeOut();
//             })
//     } else if (windowWidth >= 1500) {
//         $('#cusco-text').css({"margin": "60px", "padding-top": "200"});
//     } else
//         $('#cusco-text').css({"margin": "70px", "padding-top": "250"});
//     }
// });

    /* ----------------------------------------
    Gallery image - Column 1 ( start left down)
    ------------------------------------------- */
    $('#cusco').hover(function() {
        $('#cusco-text').fadeIn('slow');
    }, function(){
        $('#cusco-text').fadeOut();
    });

    $('#frozen').hover(function() {
        $('#frozen-text').fadeIn('slow');
    }, function(){
        $('#frozen-text').fadeOut();
    });

    $('#dew').hover(function() {
        $('#dew-text').fadeIn('slow');
    }, function(){
        $('#dew-text').fadeOut();
    });

    $('#sunset').hover(function() {
        $('#sunset-text').fadeIn('slow');
    }, function(){
        $('#sunset-text').fadeOut();
    });

    $('#sparks').hover(function() {
        $('#sparks-text').fadeIn('slow');
    }, function(){
        $('#sparks-text').fadeOut();
    });

    $('#rust').hover(function() {
        $('#rust-text').fadeIn('slow');
    }, function(){
        $('#rust-text').fadeOut();
    });

    $('#float').hover(function() {
        $('#float-text').fadeIn('slow');
    }, function(){
        $('#float-text').fadeOut();
    });

    /* ----------------------------------------
    Contact form
    ------------------------------------------- */

    $('form').submit(function() {
        $('button').confettiButton({
            minScale: 1000,
            maxScale: 1000,
            colorArray: ['#787878', '#f0f0f0', '#ffa500', '#2EBFF6', '#2ECC71']
        });
        alert("Thank you for the submission!");
        event.preventDefault();
    });
});

/* ----------------------------------------
Form validation
------------------------------------------- */
// function formValidation() {
//     $('form')
//     if ($('contactform[name="name"]').val() == ""){
//         alert("Please provide a name");
//         // return false;
// } else if ($('contactform[email="email"]').val() == "") {
//     alert("Please provide an email!")
// } else {
//     $('form').submit
// }
//   }
// });
// formValidation();