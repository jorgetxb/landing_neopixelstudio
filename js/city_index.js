//Parallax Effect
let bld_nxs = document.querySelector('#bld_nxs');

window.addEventListener('scroll', function() {
    if (window.pageYOffset <= _docHeight * 0.75) {
        let value = window.scrollY;
        bld_nxs.style.top = value * -2.2 + "px";
    } else {
        bld_nxs.style.top = bld_nxs.style.top;
    }
})