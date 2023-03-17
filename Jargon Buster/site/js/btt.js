var button = document.getElementById("back-to-top");
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});
button.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});