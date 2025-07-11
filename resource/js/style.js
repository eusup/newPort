$(document).ready(function () {
    // scroll animate
    $(window).scroll(function () {
        const showlist = $("section");
        const trigger = $(window).scrollTop() + $(window).height() / 1.5;

        showlist.each(function (i, el) {
            const top = $(el).offset().top;

            if (i === 0) {
                $(el).addClass("act");
            } else if (top <= trigger) {
                $(el).addClass("act");
            } else {
                $(el).removeClass("act");
            }
        });

        let trigger2 = $(window).scrollTop() + $(window).height() / 2;
        let closestLi = null;
        let minDistance = Infinity;
        $(".section03>.flex>div:first-child li").each(function () {
            let top = $(this).offset().top;
            let height = $(this).outerHeight();
            let middle = top + height / 2;
            let distance = Math.abs(trigger2 - middle);

            if (distance < minDistance) {
                minDistance = distance;
                closestLi = this;
            }
        });

        $(".section03>.flex>div:first-child li").removeClass("act");

        if (closestLi) {
            $(closestLi).addClass("act");

            // hard coding
            if($(".y2015").hasClass("act")){
                $(".year, .section03>.flex>div:last-child ul").find("li").removeClass("act");
                $(".year").find("li.y2015").addClass("act");
            }

            if($(".y2021").hasClass("act")){
                $(".year, .section03>.flex>div:last-child ul").find("li").removeClass("act");
                $(".year").find("li.y2021").addClass("act");
            }

            if($(".y2022").hasClass("act")){
                $(".year, .section03>.flex>div:last-child ul").find("li").removeClass("act");
                $(".year").find("li.y2022").addClass("act");
            }
            if($(".y2025").hasClass("act")){
                $(".year, .section03>.flex>div:last-child ul").find("li").removeClass("act");
                $(".year").find("li.y2025").addClass("act");
            }
        }
    });
});