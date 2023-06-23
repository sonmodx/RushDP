$(document).ready(function() {
    console.log($(window).width());

    setInterval(() => {
        const leftPosition = Math.floor(Math.random() * $(window).width());
        const width = Math.floor( (Math.random() * 30) + 10);
        const topPosition = -100;
        $("body").append(`<div class="snowball"></div>`);
        const $snowball = $(".snowball:last-child");
        $snowball.css({
            width: `${width}px`,
            left: `${leftPosition}px`,
            top: `${topPosition}px`
        });

        // Animation snowball falling
        $snowball.animate(
            { top: $(window).height() },
            3000,
            "linear",
            function() {
                $(this).remove(); // Remove the snowball when animation is complete
            }
        );
    }, 500);


    
});
