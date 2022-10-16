function fadeOutnojquery(e) {
    e.style.opacity = 1;
    var t = setInterval(function () {
        (e.style.opacity = e.style.opacity - 0.05), e.style.opacity <= 0.05 && (clearInterval(t), (preloader.style.display = "none"));
    }, 16);
}
var preloader = document.getElementById("preloader_preload");
window.onload = function () {
    setTimeout(function () {
        fadeOutnojquery(preloader);
    }, 500);
};