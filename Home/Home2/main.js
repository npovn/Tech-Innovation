
// $(window).on('scroll', function() {
//     window.requestAnimationFrame(scrollHandler);
//  });

window.addEventListener("scroll", function(){
    const Parallax = document.querySelector(".parallax");
    let offsetY = this.window.scrollY;
    Parallax.style.transform = "translateY(" + offsetY * 0.5 + "px)";
})

