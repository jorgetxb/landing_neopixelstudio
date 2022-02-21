//Parallax Effect

let city_center = document.querySelector('#city_center');
let city = document.querySelector('#city');
let mountains = document.querySelector('#mountains');
let bld_left = document.querySelector('#bld_left');
let bld_right = document.querySelector('#bld_right');
let ground1 = document.querySelector('.ground1');
let ground2 = document.querySelector('.ground2');
let ground3 = document.querySelector('.ground3');
let floor1 = document.querySelector('#floor1');
let floor2 = document.querySelector('#floor2');
let bld_nxs = document.querySelector('#bld_nxs');
  
window.addEventListener('scroll', function () {
    if (window.pageYOffset <= _docHeight*0.75) {
    let value = window.scrollY;
    mountains.style.top = value * 0 + "px";
    city_center.style.top = value * -0.35 + "px";
    city.style.top = value * -0.7 + "px";
    bld_left.style.top = value * -1.7 + "px";
    bld_right.style.top = value * -1.7 + "px";
    ground1.style.top = value * -0.6 + "px";
    floor1.style.transform = 'rotateX('+(value*0.07)+'deg)';
    floor2.style.transform = 'rotateX('+(value*0.07)+'deg)';
    ground2.style.top = value * -1 + "px";
    ground3.style.top = value * -2.2 + "px";
    bld_nxs.style.top = value * -2.2 + "px";
    } else {
    mountains.style.top = mountains.style.top;
    city_center.style.top = city_center.style.top;
    city.style.top = city.style.top;
    bld_left.style.top = bld_left.style.top;
    bld_right.style.top = bld_right.style.top;
    ground1.style.top = ground1.style.top;
    floor1.style.transform = floor1.style.transform;
    floor2.style.transform = floor2.style.transform;
    ground2.style.top = ground2.style.top;
    ground3.style.top = ground3.style.top;
    bld_nxs.style.top = bld_nxs.style.top;
    }
})