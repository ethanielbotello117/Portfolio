$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 700){
            $(".arrow-up").css({"bottom" : "20px"})
        } else {
            $(".arrow-up").css({"bottom" : "-100px"})
        }
    })

    $(window).scroll(function(){
        if ($(this).scrollTop() > 650){
            $(".skill").css({"opacity" : "10"})
            $(".progress-bar").css({"opacity" : "10"})
            $(".progress-bar").css({"padding-right" : "0"})
            $(".section-title").css({"padding-left" : "0"})
            $(".section-title").css({"opacity" : "10"})
        } else {
            $(".skill").css({"opacity" : "0"})
            $(".progress-bar").css({"opacity" : "0"})
            $(".progress-bar").css({"padding-right" : "100px"})
            $(".section-title").css({"padding-left" : "300px"})
            $(".section-title").css({"opacity" : "0"})
        }
    })

    let dark = true;

    function switchMode(){
        if(dark){
            dark = false;
            $("body").css({"background-color" : "white"});
            $(".switchColor").css({"color" : "black"});
            $(".switchColor").css({"transition" : "0.3s"});
        } else {
            dark = true;
            $("body").css({"background-color" : "rgb(36, 36, 36)"});
            $(".switchColor").css({"color" : "white"});
        }
    }

    $('#modeSwitch').on('click', switchMode);
})