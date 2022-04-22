window.onload = function() {
    //Back to the start
    window.scrollTo(0, 0);

    //loader page
    setTimeout(function() {
        document.querySelector(".loader").style.display = 'none';
    }, 2000);
}