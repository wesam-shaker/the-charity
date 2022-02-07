    // let div = document.querySelector(".scroll-top");

    // div.onclick = function () {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    // }
    const div = document.querySelector(".scroll-top");

    div.addEventListener("click", function () {
        // window.scrollTo(0, 0);
            window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth",
        });
        // $("html, body").animate({ scrollTop: 0}, "slow");
    });

    // start loading
    
    $(window).on("load",function(){
        $("body").css("overflow","auto");
        $(".loading").fadeOut(2000);
        });