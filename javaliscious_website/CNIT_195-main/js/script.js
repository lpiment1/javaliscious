var elmnt = document.getElementById("scroll_page_div");

$(document).ready(function(){

    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
});

$(elmnt).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function() {
    //$("html, body").animate({scrollTop: 0}, 800);
    //document.getElementById("scroll_page_div").animate({scrollTop: 0}, 800);
    
  elmnt.scrollTop = 0;
      
 });
