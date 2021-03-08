$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 700){
            $(".arrow-up").css({"bottom" : "20px"})
        } else {
            $(".arrow-up").css({"bottom" : "-100px"})
        }
    })
})