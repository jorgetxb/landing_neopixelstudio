//Parallax Effect

/*let ground3 = document.querySelector('.ground3');
let bld_nxs = document.querySelector('#bld_nxs');*/
let ground1 = document.querySelector('#ground1');
let floor1 = document.querySelector('#floor1');
let bld_left = document.querySelector('#bld_left');
let bld_right = document.querySelector('#bld_right');
/*let ground2 = document.querySelector('#ground2');
let floor2 = document.querySelector('#floor2');*/



document.getElementById("parallax").addEventListener('scroll', function() {
    if (document.getElementById("parallax").scrollTop <= _docHeight * 0.6) {
        let value = document.getElementById("parallax").scrollTop;
        /*ground3.style.top = value * -2.2 + "px";
        bld_nxs.style.top = value * -2.2 + "px"; */
        ground1.style.top = value * -0.12 + "px";
        floor1.style.transform = 'rotateX(' + (value * 0.0075 + 10) + 'deg)';
        bld_left.style.top = value * -0.75 + "px";
        bld_right.style.top = value * -0.75 + "px";
        /*ground2.style.top = value * -1 + "px";
        floor2.style.transform = 'rotateX(' + (value * 0.07) + 'deg)';*/
    } else {
        /*ground3.style.top = ground3.style.top;
        bld_nxs.style.top = bld_nxs.style.top;*/
        ground1.style.top = ground1.style.top;
        floor1.style.transform = floor1.style.transform;
        bld_left.style.top = bld_left.style.top;
        bld_right.style.top = bld_right.style.top;
        /*ground2.style.top = ground2.style.top;
        floor2.style.transform = floor2.style.transform;*/
    }
})