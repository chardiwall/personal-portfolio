// PERSONAL PORTFOLIO
// DEVELOPED BY SAMIULHAQ CHARDIWALL
// STARTED DATE: 10-JAN-2023

// INDEX.JS  --HOME PAGE FUNCTIONALITY-- 

// preloader
var loader = bodymovin.loadAnimation({
    container: document.getElementById("anime"),
    renderer:'svg',
    loop: true,
    autoplay: true,
    path: '../Thumbnail/animation/opener-loading.json'
});

// loading index page
let loader_ctr = document.getElementById("pre-loader-ctr");

addEventListener("load", function(){
    loader_ctr.style.display= "none"
    loader_ctr.animate()
})