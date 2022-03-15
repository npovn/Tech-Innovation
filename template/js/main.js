window.addEventListener("scroll", function(){
    const Parallax = document.querySelector(".parallax");
    let offsetY = this.window.scrollY;
    Parallax.style.transform = "translateY(" + offsetY + "px)";
})

