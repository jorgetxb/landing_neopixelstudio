var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
var _docWidth = (document.width !== undefined) ? document.width : document.body.offsetWidth;   

//Loader

window.onload = function () {
  var loader = document.querySelector(".loader");
  setTimeout(function(){
    loader.style.display = 'none';
    },2000);
}

//Close Whatsapp function

const close_whatsapp = document.querySelector('#close_whatsapp');
close_whatsapp.onclick = function () {
  whatsapp.style.display = 'none';
}

//Close tutorials

const close_tutorial1 = document.querySelector('#tutorial1');
const close_tutorial2 = document.querySelector('#tutorial2');
const close_tutorial3 = document.querySelector('#tutorial3');

//Close tutotial 1

close_tutorial1.onclick = function () {
  close_tutorial1.style.display = 'none';
  close_tutorial2.style.display = 'block';
}

//Close tutotial 2

close_tutorial2.onclick = function () {
  close_tutorial2.style.display = 'none';
  close_tutorial3.style.display = 'block';
}

//Close tutotial 3

close_tutorial3.onclick = function () {
  close_tutorial3.style.display = 'none';
}