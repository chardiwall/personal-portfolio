// PERSONAL PORTFOLIO
// DEVELOPED BY SAMIULHAQ CHARDIWALL
// STARTED DATE: 10-JAN-2023

// INDEX.JS  --HOME PAGE FUNCTIONALITY-- 

// -------------- preloader -----------
var anim_icon = bodymovin.loadAnimation({
    container: document.getElementById("anime"),
    renderer:'svg',
    loop: true,
    autoplay: true,
    path: '../Thumbnail/animation/opener-loading.json'
});

// -------------- loading index page ------
let loader_ctr = document.getElementById("pre-loader-ctr");

addEventListener("load", function(){
    loader_ctr.style.display= "none";
    loader_ctr.animate();
    document.getElementById('body-container').style.display="relative"
})

// ------------- nav toggler function --------
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener("click", ()=>{
    document.querySelector('.side-menu').classList.toggle('nav-collapse');
    document.querySelector('.logo').classList.toggle('un-collapsed-logo');
    
    // if(document.querySelector('.side-menu').classList.contains('nav-collapse')){
    //     document.querySelector('.section').style.paddingLeft="1in"
    //     document.querySelector('.section').style.paddingRight="0"
    // }
    // else{
    //     document.querySelector('.section').style.paddingLeft="270px"
    // }

    document.getElementById('nav-toggler-icon').classList.toggle('fa-caret-left')

    document.getElementById('nav-toggler-icon').classList.toggle('fa-caret-right')
    
})

// ----------- typing professions ------------
var typing = new Typed('.typing',{
    strings: [ 'Machine Learning Engineer', 'Deep Learning Engineer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})


// ----------- Cursor customization ------------
var cursor_ = document.querySelector('.cursor');
document.addEventListener('mousemove', e =>{
    cursor_.setAttribute('style', 'top: '+(e.pageY-18)+'px; left: '+(e.pageX-18)+'px;' )
})

document.addEventListener('click', ()=>{
    cursor_.classList.add('expand')

    setTimeout(()=>{
        cursor_.classList.remove('expand')
    }, 500)
})

// theme
const styleSwitcerTggler= document.querySelector('.style-switcher-toggler');
styleSwitcerTggler.addEventListener("click", ()=>{
    document.querySelector('.style-switcher').classList.toggle('open')
})

window.addEventListener('scroll', ()=>{
    if (document.querySelector('.style-switcher').classList.contains('open'))
        document.querySelector('.style-switcher').classList.remove('open')
        console.log('hi')
})



// alternate theme
const alternateStyle= document.querySelectorAll(".alternate-color");
function setActivityStyle(color){
    alternateStyle.forEach( (style) => {
        if (color === style.getAttribute('title')){
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled", true)
        }
    })
}



// dark theme
const dayNight = document.querySelector('.day-night')

dayNight.addEventListener('click', ()=>{
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
})

window.addEventListener('load', ()=>{
    if(document.body.classList.contains(' dark')){
        dayNight.querySelector('i').classList.add('fa-sun');
    }
    
    else{
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})
